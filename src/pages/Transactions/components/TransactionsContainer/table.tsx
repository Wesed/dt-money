import { useContext } from 'react'
import { TransactionsContext } from '@/contexts/transactionsContext'
import { FormatValue } from '@/components/utils/formatPrice'

export function TableTransactions() {
  const { dataTransactions } = useContext(TransactionsContext)

  return (
    <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
      <tbody>
        {dataTransactions?.map((transaction) => (
          <tr key={transaction.id}>
            <td className="column-table w-1/2">{transaction.description}</td>
            <td className="column-table">
              {transaction.type === 'income' ? (
                <span className="text-green_300">
                  {FormatValue(transaction.price)}
                </span>
              ) : (
                <span className="text-red_300">
                  - {FormatValue(transaction.price)}
                </span>
              )}
            </td>
            <td className="column-table">{transaction.category}</td>
            <td className="column-table">{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
