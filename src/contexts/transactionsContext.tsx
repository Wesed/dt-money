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
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      // se tiver query, adiciona a busca na url
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const dataType = await response.json()
    setDataTransaction(dataType)
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
