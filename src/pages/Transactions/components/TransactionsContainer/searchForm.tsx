import { TransactionsContext } from '@/contexts/transactionsContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
    console.log(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex gap-4"
    >
      <input
        type="text"
        className="flex-1 rounded-md border border-transparent bg-gray_900 p-4 text-gray_300 placeholder:text-gray_500"
        placeholder="Busque por transações"
        {...register('query')}
      />
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

export const SearchForm = memo(SearchFormComponent)
