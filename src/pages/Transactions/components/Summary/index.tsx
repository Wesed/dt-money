import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContent } from './summaryContent'
import { TransactionContext } from '@/contexts/transactionContext'
import { useContext, useEffect, useState } from 'react'

export function Summary() {
  const { dataTransaction } = useContext(TransactionContext)
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [outcomeTotal, setOutcomeTotal] = useState(0)

  // setando income, outcome e total
  useEffect(() => {
    if (dataTransaction && dataTransaction.length > 0) {
      const totalIncome = dataTransaction
        .filter((transaction) => {
          return transaction.type === 'income'
        })
        .map((transaction) => transaction.price)

      const totalOutcome = dataTransaction
        .filter((transaction) => {
          return transaction.type === 'outcome'
        })
        .map((transaction) => transaction.price)

      setIncomeTotal(
        totalIncome.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
        ),
      )

      setOutcomeTotal(
        totalOutcome.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
        ),
      )
    }
  }, [dataTransaction])

  return (
    <section className="mx-auto -mt-20 mb-0 grid w-full max-w-maxWidth grid-cols-3 gap-8 px-6 py-0">
      <SummaryContent
        type="Entradas"
        icon={<ArrowCircleUp size={32} className="text-green_300" />}
        value={incomeTotal}
      />

      <SummaryContent
        type="Saídas"
        icon={<ArrowCircleDown size={32} className="text-red_300" />}
        value={outcomeTotal}
      />

      <SummaryContent
        type="Total"
        icon={<CurrencyDollar size={32} className="text-white" />}
        value={incomeTotal - outcomeTotal}
        isTotal={true}
      />
    </section>
  )
}
