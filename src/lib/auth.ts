// Create A Better Auth Instance

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/db";

export const auth = betterAuth({
  // configure database
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
});

// // Extract session using internal API
// export async function getAuthFromRequest(req: Request) {
//   const result = await (auth.api as any).ok({
//     request: req,
//     method: "GET",
//   });

//   return result.ok ? result : null;
// }
