import { db } from "./index";
import { debts, payments, debtCategories, users } from "./schema";
import { eq, desc, and } from "drizzle-orm";

// User queries
export async function getUserById(id: string) {
  const [user] = await db.select().from(users).where(eq(users.id, id));
  return user;
}

export async function getUserByEmail(email: string) {
  const [user] = await db.select().from(users).where(eq(users.email, email));
  return user;
}

// Debt queries
export async function getUserDebts(userId: string) {
  return await db
    .select({
      id: debts.id,
      creditorName: debts.creditorName,
      debtType: debts.debtType,
      originalAmount: debts.originalAmount,
      currentBalance: debts.currentBalance,
      interestRate: debts.interestRate,
      minimumPayment: debts.minimumPayment,
      dueDate: debts.dueDate,
      status: debts.status,
      notes: debts.notes,
      createdAt: debts.createdAt,
      updatedAt: debts.updatedAt,
      category: {
        id: debtCategories.id,
        name: debtCategories.name,
        color: debtCategories.color,
      },
    })
    .from(debts)
    .leftJoin(debtCategories, eq(debts.categoryId, debtCategories.id))
    .where(eq(debts.userId, userId))
    .orderBy(desc(debts.createdAt));
}

export async function getDebtById(id: string, userId: string) {
  const [debt] = await db
    .select()
    .from(debts)
    .where(and(eq(debts.id, id), eq(debts.userId, userId)));
  return debt;
}

// Payment queries
export async function getDebtPayments(debtId: string) {
  return await db
    .select()
    .from(payments)
    .where(eq(payments.debtId, debtId))
    .orderBy(desc(payments.paymentDate));
}

// Category queries
export async function getUserCategories(userId: string) {
  return await db
    .select()
    .from(debtCategories)
    .where(eq(debtCategories.userId, userId))
    .orderBy(debtCategories.name);
}

// Dashboard summary queries
export async function getUserDebtSummary(userId: string) {
  const userDebts = await getUserDebts(userId);

  const totalDebt = userDebts.reduce(
    (sum, debt) => sum + Number.parseFloat(debt.currentBalance || "0"),
    0
  );

  const totalOriginalDebt = userDebts.reduce(
    (sum, debt) => sum + Number.parseFloat(debt.originalAmount || "0"),
    0
  );

  const totalMinimumPayments = userDebts.reduce(
    (sum, debt) => sum + Number.parseFloat(debt.minimumPayment || "0"),
    0
  );

  const activeDebts = userDebts.filter(
    (debt) => debt.status === "active"
  ).length;
  const paidOffDebts = userDebts.filter(
    (debt) => debt.status === "paid_off"
  ).length;

  return {
    totalDebt,
    totalOriginalDebt,
    totalMinimumPayments,
    activeDebts,
    paidOffDebts,
    totalDebts: userDebts.length,
    debts: userDebts,
  };
}
