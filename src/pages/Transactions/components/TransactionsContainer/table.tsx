import { useContext } from 'react'
import { NewRelease } from './newRelease'
import { TransactionsContext } from '@/contexts/transactionsContext'

export function TableTransactions() {
  const { dataTransactions } = useContext(TransactionsContext)

  return (
    <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
      <tbody>
        {dataTransactions?.map((transaction) => (
          <NewRelease
            key={transaction.id}
            description={transaction.description}
            value={transaction.price}
            category={transaction.category}
            type={transaction.type}
            createdAt={transaction.createdAt}
          />
        ))}
      </tbody>
    </table>
  )
}
