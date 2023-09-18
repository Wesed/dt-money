import { useContext } from 'react'
import { TransactionsContext } from '@/contexts/transactionsContext'
import { dateFormatter, priceFormatter } from '@/components/utils/formatter'

export function TableTransactions() {
  const { dataTransactions } = useContext(TransactionsContext)

  return (
    <div className="flex flex-col items-center gap-6">
      <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2 capitalize">
        <tbody>
          {dataTransactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td className="column-table w-1/2">{transaction.description}</td>
              <td className="column-table">
                {transaction.type === 'income' ? (
                  <span className="text-green_300">
                    {priceFormatter.format(transaction.price)}
                  </span>
                ) : (
                  <span className="text-red_300">
                    - {priceFormatter.format(transaction.price)}
                  </span>
                )}
              </td>
              <td className="column-table">{transaction.category}</td>
              <td className="column-table">
                {dateFormatter.format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        href="/"
        className="opacity-60 hover:text-green_500 hover:opacity-100 hover:transition hover:duration-200"
      >
        Todas as transações
      </a>
    </div>
  )
}
