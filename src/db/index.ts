// Connect Drizzle orm to the database
// src/db/index.ts
import { drizzle } from "drizzle-orm/postgres-js";
import { Pool } from "pg";
import * as schema from "./schema";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

// Export the pool instance for direct use if needed (e.g., for migrations)
export { pool };
