import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/axios';

export interface Transaction {
  id: number;
  title: string;
  category: string;
  value: number;
  createdAt: string;
}

type TransactionCreate = Omit<Transaction, 'id' | 'createdAt'>;

export interface TransactionContext {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionCreate) => Promise<void>;
}

export interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContext>(
  {} as TransactionContext,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then((data) => {
      setTransactions(data.data.transactions);
    });
  }, []);

  async function createTransaction(transactionData: TransactionCreate) {
    const response = await api.post('transactions', {
      ...transactionData,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
