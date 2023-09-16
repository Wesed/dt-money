import { createContext, ReactNode, useEffect, useState } from 'react'

interface DataTransaction {
  id: number
  description: string
  price: number
  category: string
  createdAt: string
  type?: string
}

interface TransactionContextProps {
  dataTransaction: DataTransaction[]
}

export const TransactionContext = createContext({} as TransactionContextProps)

interface TransactionContextProviderProps {
  children: ReactNode
}

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [dataTransaction, setDataTransaction] = useState<DataTransaction[]>([])

  // popula a tabela
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3333/transactions')
      const dataType = await response.json()
      setDataTransaction(dataType)
    }
    getData()
  }, [])

  return (
    <TransactionContext.Provider value={{ dataTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
