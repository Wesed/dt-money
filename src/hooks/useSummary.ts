import { TransactionsContext } from '@/contexts/transactionsContext'
import { useContext } from 'react'

export function useSummary() {
  const { dataTransactions } = useContext(TransactionsContext)

  // setando income, outcome e total
  const summary = dataTransactions.reduce(
    (accumulator, currentTransaction) => {
      if (currentTransaction.type === 'income') {
        accumulator.income += currentTransaction.price
        accumulator.total += currentTransaction.price
      } else {
        accumulator.outcome += currentTransaction.price
        accumulator.total -= currentTransaction.price
      }
      return accumulator
    },
    {
      // setando os valores iniciais
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
