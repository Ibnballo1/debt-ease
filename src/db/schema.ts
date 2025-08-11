// Database configuration and schema// src/db/schema.ts
import {
  pgTable,
  varchar,
  timestamp,
  decimal,
  date,
  text,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// --- Users Table ---
export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(), // BetterAuth will provide this ID
  email: varchar("email", { length: 255 }).unique().notNull(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(), // Storing hashed password
  fullName: varchar("full_name", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).default("user").notNull(), // 'user' or 'admin'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// --- Creditors Table ---
export const creditors = pgTable("creditors", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }), // Cascade delete creditors if user is deleted
  name: varchar("name", { length: 255 }).notNull(),
  contactPerson: varchar("contact_person", { length: 255 }),
  contactEmail: varchar("contact_email", { length: 255 }),
  contactPhone: varchar("contact_phone", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// --- Debts Table ---
export const debts = pgTable("debts", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }), // Cascade delete debts if user is deleted
  creditorId: varchar("creditor_id", { length: 255 })
    .notNull()
    .references(() => creditors.id, { onDelete: "restrict" }), // Restrict deletion if debts exist
  name: varchar("name", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(), // Original debt amount
  remainingAmount: decimal("remaining_amount", {
    precision: 10,
    scale: 2,
  }).notNull(), // Current outstanding balance
  dueDate: date("due_date").notNull(),
  status: varchar("status", { length: 50 }).default("Active").notNull(), // E.g., 'Active', 'Paid Off', 'Overdue'
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// --- Payments Table ---
export const payments = pgTable("payments", {
  id: varchar("id", { length: 255 }).primaryKey(),
  debtId: varchar("debt_id", { length: 255 })
    .notNull()
    .references(() => debts.id, { onDelete: "cascade" }), // Cascade delete payments if debt is deleted
  amountPaid: decimal("amount_paid", { precision: 10, scale: 2 }).notNull(),
  paymentDate: date("payment_date").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// --- Relations for Drizzle ORM ---
export const userRelations = relations(users, ({ many }) => ({
  debts: many(debts),
  creditors: many(creditors),
}));

export const creditorRelations = relations(creditors, ({ one, many }) => ({
  user: one(users, {
    fields: [creditors.userId],
    references: [users.id],
  }),
  debts: many(debts),
}));

export const debtRelations = relations(debts, ({ one, many }) => ({
  user: one(users, {
    fields: [debts.userId],
    references: [users.id],
  }),
  creditor: one(creditors, {
    fields: [debts.creditorId],
    references: [creditors.id],
  }),
  payments: many(payments),
}));

export const paymentRelations = relations(payments, ({ one }) => ({
  debt: one(debts, {
    fields: [payments.debtId],
    references: [debts.id],
  }),
}));
