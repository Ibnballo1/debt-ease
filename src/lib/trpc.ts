// tRPC client setup// src/lib/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "~/server/trpc/routers/_app";

// Create a tRPC React client
export const trpc = createTRPCReact<AppRouter>();
