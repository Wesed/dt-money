import { FormatValue } from '../utils/formatPrice'

export interface NewReleaseProps {
  description: string
  value: number
  tag: string
  date: string
  type?: string
}

export function NewRelease({
  description,
  value,
  tag,
  date,
  type = 'outcome',
}: NewReleaseProps) {
  return (
    <tr>
      <td className="column-table w-1/2">{description}</td>
      <td className="column-table">
        {type === 'income' ? (
          <span className="text-green_300">{FormatValue(value)}</span>
        ) : (
          <span className="text-red_300">- {FormatValue(value)}</span>
        )}
      </td>
      <td className="column-table">{tag}</td>
      <td className="column-table">{date}</td>
    </tr>
  )
}
