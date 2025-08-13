// Connect Drizzle orm to the database
// src/db/index.ts
// import { drizzle } from "drizzle-orm/postgres-js";
// import { Pool } from "pg";
// import * as schema from "./schema";
// import * as dotenv from "dotenv";

// dotenv.config({ path: ".env" });

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export const db = drizzle(pool, { schema });

// // Export the pool instance for direct use if needed (e.g., for migrations)
// export { pool };

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// Fixed import to use relative path without extension
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create the connection
const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client, { schema });

// Fixed export to use relative path
export * from "./schema";
