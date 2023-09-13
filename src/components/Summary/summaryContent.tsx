import { ReactNode } from 'react'
import { FormatValue } from '../utils/formatPrice'

export interface summaryContentProps {
  type: string
  icon: ReactNode
  value: number
  isTotal?: boolean
}

export function SummaryContent({
  type,
  icon,
  value,
  isTotal = false,
}: summaryContentProps) {
  return (
    <div
      className={`rounded-md ${isTotal ? 'bg-green_700' : 'bg-gray_600'} p-8`}
    >
      <header className="flex items-center justify-between text-gray_300">
        <span className="">{type}</span>
        {icon}
      </header>

      <strong className="mt-4 block text-3xl">{FormatValue(value)}</strong>
    </div>
  )
}
