import { useContext } from 'react'
import { NewRelease } from './newRelease'
import { TransactionContext } from '@/contexts/transactionContext'

export function TableTransactions() {
  const { dataTransaction } = useContext(TransactionContext)

  return (
    <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
      <tbody>
        {dataTransaction?.map((transaction) => (
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
