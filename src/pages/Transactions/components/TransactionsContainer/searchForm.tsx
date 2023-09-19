import { TransactionsContext } from '@/contexts/transactionsContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, FadersHorizontal, MagnifyingGlass } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import * as Select from '@radix-ui/react-select'
import { FilterItem } from './filterItem'
import { twMerge } from 'tailwind-merge'

const searchFormSchema = z.object({
  query: z.string(),
  filter: z.string().optional(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query, data.filter)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex gap-4"
    >
      <div className="relative flex flex-1 items-center">
        <input
          type="text"
          className=" flex-1 rounded-md border border-transparent bg-gray_900 p-4 text-gray_300 placeholder:text-gray_500"
          placeholder="Busque por transações"
          {...register('query')}
        />
        {/* filtro */}
        <div className="absolute right-0 mr-3 flex">
          <Controller
            control={control}
            name="filter"
            render={({ field }) => {
              return (
                <Select.Root onValueChange={field.onChange} value={field.value}>
                  <Select.Trigger
                    className={twMerge(
                      `flex w-40 items-center justify-between gap-2 p-2`,
                      'rounded-md border border-gray_600 text-gray_500 shadow-sm',
                      'transition-all duration-200',
                      'outline-0 focus:ring-0',
                    )}
                  >
                    <Select.Value
                      className="text-gray_300"
                      placeholder="Filtrar por..."
                    />

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
                        <FilterItem value="income" description="Entradas" />
                        <FilterItem value="outcome" description="Saídas" />
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              )
            }}
          ></Controller>
        </div>
      </div>

      <button
        disabled={isSubmitting}
        className="flex items-center gap-3 rounded-md border border-green_300 bg-transparent p-3 px-8 font-bold text-green_300 hover:duration-200 enabled:hover:border-green_500 enabled:hover:bg-green_500 enabled:hover:text-white enabled:hover:transition disabled:cursor-wait disabled:opacity-60"
      >
        <MagnifyingGlass className="h-5 w-5" />
        {isSubmitting ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  )
}
