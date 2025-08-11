// Main tRPC procedures// src/server/trpc/routers/_app.ts
import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";
import { userRouter } from "./user"; // Will be used for admin user management
import { debtRouter } from "./debt"; // Will contain debt CRUD operations

/**
 * This is the primary router for your server.
 *
 * All routers added in /src/server/trpc/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter, // For admin to manage users
  debt: debtRouter, // For user to manage debts
});

// export type definition of API
export type AppRouter = typeof appRouter;
