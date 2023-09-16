import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'

export interface newTransactionTypeProps {
  transactionType: string
  id: string
}

export function NewTransactionType({
  transactionType,
  id,
}: newTransactionTypeProps) {
  return (
    <RadioGroup.Item
      value={id}
      className={`focus-border-transparent group flex flex-1 cursor-pointer justify-center gap-2 rounded-md border-transparent bg-gray_700 p-4 text-gray_100 shadow-sm focus:ring-0  data-[state=checked]:text-white 
      ${
        id === 'income'
          ? 'data-[state=checked]:bg-green_500'
          : 'data-[state=checked]:bg-red_500'
      }`}
    >
      <ArrowCircleDown
        size={24}
        className={`${
          id === 'income' ? 'text-green_500' : 'text-red_500'
        } group-data-[state=checked]:text-white`}
      />
      {transactionType}
    </RadioGroup.Item>
  )
}
