import { api } from '@/lib/axios'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

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

  const fetchTransactions = useCallback(
    async (query?: string, filter?: string) => {
      console.log(query)
      const response = await api.get('transactions', {
        params: {
          q: query,
          _sort: 'createdAt',
          _order: 'desc',
          // filtro
          type: filter,
        },
      })
      setDataTransactions(response.data)
    },
    [],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setDataTransactions((state) => [response.data, ...state])
    },
    [],
  )

  // populando a tabela
  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ dataTransactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
