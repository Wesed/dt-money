import { api } from '@/lib/axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface DataTransactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextProps {
  dataTransactions: DataTransactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsContextProviderProps {
  children: ReactNode
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [dataTransactions, setDataTransactions] = useState<DataTransactions[]>(
    [],
  )

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
        // filtro
        // type: 'outcome',
      },
    })
    setDataTransactions(response.data)
  }

  const createTransaction = async (data: CreateTransactionInput) => {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setDataTransactions((state) => [response.data, ...state])
  }

  // populando a tabela
  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ dataTransactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
