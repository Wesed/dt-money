import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { twMerge } from 'tailwind-merge'

export interface newTransactionTypeProps {
  transactionType: string
  value: string
}

export function NewTransactionType({
  transactionType,
  value,
}: newTransactionTypeProps) {
  return (
    <RadioGroup.Item
      value={value}
      className={twMerge(
        'group flex flex-1 cursor-pointer justify-center gap-2 rounded-md bg-gray_700 p-4 text-gray_100 shadow-sm focus:ring-0',
        'data-[state=checked]:text-white',
        'data-[state=unchecked]:hover:bg-gray_600',
        'linear transition duration-200',
        `${
          value === 'income'
            ? 'data-[state=checked]:bg-green_500'
            : 'data-[state=checked]:bg-red_500'
        }`,
      )}
    >
      {value === 'income' ? (
        <ArrowCircleUp
          size={24}
          className={`${
            value === 'income' ? 'text-green_500' : 'text-red_500'
          } group-data-[state=checked]:text-white`}
        />
      ) : (
        <ArrowCircleDown
          size={24}
          className={`${
            value === 'income' ? 'text-green_500' : 'text-red_500'
          } group-data-[state=checked]:text-white`}
        />
      )}
      {transactionType}
    </RadioGroup.Item>
  )
}
