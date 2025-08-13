import {
  pgTable,
  text,
  timestamp,
  decimal,
  uuid,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users table for BetterAuth integration
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  emailVerified: boolean("email_verified").default(false),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Sessions table for BetterAuth
export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Accounts table for BetterAuth (OAuth providers)
export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  type: text("type").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  expiresAt: integer("expires_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Debt categories
export const debtCategories = pgTable("debt_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  color: text("color").default("#259672"),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Main debts table
export const debts = pgTable("debts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id").references(() => debtCategories.id, {
    onDelete: "set null",
  }),
  creditorName: text("creditor_name").notNull(),
  debtType: text("debt_type").notNull(),
  originalAmount: decimal("original_amount", {
    precision: 12,
    scale: 2,
  }).notNull(),
  currentBalance: decimal("current_balance", {
    precision: 12,
    scale: 2,
  }).notNull(),
  interestRate: decimal("interest_rate", { precision: 5, scale: 2 }).default(
    "0"
  ),
  minimumPayment: decimal("minimum_payment", {
    precision: 10,
    scale: 2,
  }).default("0"),
  dueDate: timestamp("due_date"),
  status: text("status").default("active"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Payment history
export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  debtId: uuid("debt_id")
    .notNull()
    .references(() => debts.id, { onDelete: "cascade" }),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paymentDate: timestamp("payment_date").notNull(),
  paymentMethod: text("payment_method"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Define relationships
export const usersRelations = relations(users, ({ many }) => ({
  debts: many(debts),
  categories: many(debtCategories),
  sessions: many(sessions),
  accounts: many(accounts),
}));

export const debtsRelations = relations(debts, ({ one, many }) => ({
  user: one(users, {
    fields: [debts.userId],
    references: [users.id],
  }),
  category: one(debtCategories, {
    fields: [debts.categoryId],
    references: [debtCategories.id],
  }),
  payments: many(payments),
}));

export const debtCategoriesRelations = relations(
  debtCategories,
  ({ one, many }) => ({
    user: one(users, {
      fields: [debtCategories.userId],
      references: [users.id],
    }),
    debts: many(debts),
  })
);

export const paymentsRelations = relations(payments, ({ one }) => ({
  debt: one(debts, {
    fields: [payments.debtId],
    references: [debts.id],
  }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));
