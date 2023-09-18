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

interface TransactionsContextProps {
  dataTransactions: DataTransactions[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsContextProviderProps {
  children: ReactNode
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [dataTransactions, setDataTransaction] = useState<DataTransactions[]>(
    [],
  )

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query,
      },
    })
    setDataTransaction(response.data)
  }

  // populando a tabela
  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ dataTransactions, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
