import * as Select from '@radix-ui/react-select'
import { FadersHorizontal, Check } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

export function FilterTable() {
  const width = 0
  return (
    <Select.Root>
      <Select.Trigger
        className={twMerge(
          `flex w-[${width}] items-center justify-between gap-2 p-2`,
          'rounded-md border border-gray_600 text-gray_500 shadow-sm',
          'transition-all duration-200',
          'outline-0 focus:ring-0',
        )}
      >
        <Select.Value className="text-gray_300" placeholder="Filtrar por..." />

        <Select.Icon>
          <FadersHorizontal size={20} className="text-gray_500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="top"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-md bg-gray_700 focus:ring-0"
        >
          <Select.Viewport>
            <Select.Item
              value="income"
              className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2.5 text-gray_300 outline-none focus:ring-0 data-[highlighted]:bg-gray_600"
            >
              <Select.ItemText>Entradas</Select.ItemText>
              <Select.ItemIndicator>
                <Check size={20} weight="fill" className="text-green_500" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="outcome"
              className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2.5 text-gray_300 outline-none focus:ring-0 data-[highlighted]:bg-gray_600"
            >
              <Select.ItemText>Saídas</Select.ItemText>
              <Select.ItemIndicator>
                <Check size={20} weight="fill" className="text-green_500" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
