import * as Select from '@radix-ui/react-select'
import { Check } from 'phosphor-react'

interface FilterItemProps {
  value: string
  description: string
}

export function FilterItem({ value, description }: FilterItemProps) {
  return (
    <Select.Item
      value={value}
      className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2.5 text-gray_300 outline-none focus:ring-0 data-[highlighted]:bg-gray_600"
    >
      <Select.ItemText>{description}</Select.ItemText>
      <Select.ItemIndicator>
        <Check size={20} weight="fill" className="text-green_500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
