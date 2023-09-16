import { FormatValue } from '../utils/formatPrice'

export interface NewReleaseProps {
  description: string
  value: number
  category: string
  createdAt: string
  type?: string
}

export function NewRelease({
  description,
  value,
  category,
  createdAt,
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
      <td className="column-table">{category}</td>
      <td className="column-table">{createdAt}</td>
    </tr>
  )
}
