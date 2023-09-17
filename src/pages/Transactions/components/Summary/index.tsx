import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContent } from './summaryContent'
import { useSummary } from '@/hooks/useSummary'

export function Summary() {
  const summary = useSummary()

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
