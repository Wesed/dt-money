import { TransactionsContext } from '@/contexts/transactionsContext'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const dataTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.dataTransactions
    },
  )

  // setando income, outcome e total
  const summary = useMemo(() => {
    return dataTransactions.reduce(
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
  }, [dataTransactions])

  return summary
}
