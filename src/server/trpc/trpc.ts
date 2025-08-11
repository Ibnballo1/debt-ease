// tRPC context and initialization
// src/server/trpc/trpc.ts
import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { db } from "~/db";
import { getAuth } from "~/lib/auth"; // BetterAuth utility

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * The `createContext` function is called for every incoming request and is responsible
 * for creating a context object that will be passed to all procedures.
 */
export const createContext = async (opts: CreateNextContextOptions) => {
  const auth = getAuth(opts.req, opts.res); // Get auth session from BetterAuth

  return {
    db,
    auth,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer.
 */
const t = initTRPC.context<typeof createContext>().create({
  // You can add a transformer here if needed, e.g., superjson
  // transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === "BAD_REQUEST" && error.cause instanceof Error
            ? JSON.parse(error.message) // Assuming Zod errors are stringified JSON
            : null,
      },
    };
  },
});

/**
 * 3. ROUTER & PROCEDURES
 *
 * Define your tRPC router and procedures.
 */
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// Middleware to check if the user is authenticated
export const protectedProcedure = t.procedure.use(async (opts) => {
  const { ctx } = opts;
  if (!ctx.auth || !ctx.auth.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
  }
  return opts.next({
    ctx: {
      // Infers the `session` as non-nullable
      auth: ctx.auth,
    },
  });
});

// Middleware to check if the user is an admin
export const adminProcedure = protectedProcedure.use(async (opts) => {
  const { ctx } = opts;
  if (ctx.auth.user?.role !== "admin") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Not authorized as admin",
    });
  }
  return opts.next({
    ctx: {
      auth: ctx.auth, // Ensure auth context is passed through
    },
  });
});
