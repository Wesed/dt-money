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

  // populando a tabela
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3333/transactions')
      const dataType = await response.json()
      setDataTransaction(dataType)
    }
    getData()
  }, [])

  return (
    <TransactionsContext.Provider value={{ dataTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
