import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContent } from './summaryContent'

export function Summary() {
  return (
    <section className="mx-auto -mt-20 mb-0 grid w-full max-w-maxWidth grid-cols-3 gap-8 px-6 py-0">
      <SummaryContent
        type="Entradas"
        icon={<ArrowCircleUp size={32} className="text-green_300" />}
        value={17400}
      />

      <SummaryContent
        type="Saídas"
        icon={<ArrowCircleDown size={32} className="text-red_300" />}
        value={17400}
      />

      <SummaryContent
        type="Total"
        icon={<CurrencyDollar size={32} className="text-white" />}
        value={17400}
        isTotal={true}
      />
    </section>
  )
}
