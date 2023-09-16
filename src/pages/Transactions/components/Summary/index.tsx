import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContent } from './summaryContent'
import { TransactionsContext } from '@/contexts/transactionsContext'
import { useContext, useEffect, useState } from 'react'

export function Summary() {
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

  return (
    <section className="mx-auto -mt-20 mb-0 grid w-full max-w-maxWidth grid-cols-3 gap-8 px-6 py-0">
      <SummaryContent
        type="Entradas"
        icon={<ArrowCircleUp size={32} className="text-green_300" />}
        value={summary.income}
      />

      <SummaryContent
        type="Saídas"
        icon={<ArrowCircleDown size={32} className="text-red_300" />}
        value={summary.outcome}
      />

      <SummaryContent
        type="Total"
        icon={<CurrencyDollar size={32} className="text-white" />}
        value={summary.total}
        isTotal={true}
      />
    </section>
  )
}
