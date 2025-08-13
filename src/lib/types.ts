export interface User {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Debt {
  id: string;
  userId: string;
  categoryId?: string;
  creditorName: string;
  debtType: string;
  originalAmount: string;
  currentBalance: string;
  interestRate: string;
  minimumPayment: string;
  dueDate?: Date;
  status: "active" | "paid_off" | "closed";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  category?: {
    id: string;
    name: string;
    color: string;
  };
}

export interface Payment {
  id: string;
  debtId: string;
  amount: string;
  paymentDate: Date;
  paymentMethod?: string;
  notes?: string;
  createdAt: Date;
}

export interface DebtCategory {
  id: string;
  name: string;
  description?: string;
  color: string;
  userId: string;
  createdAt: Date;
}

export interface DebtSummary {
  totalDebt: number;
  totalOriginalDebt: number;
  totalMinimumPayments: number;
  activeDebts: number;
  paidOffDebts: number;
  totalDebts: number;
  debts: Debt[];
}
