import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X } from 'phosphor-react'
import { NewTransactionType } from './newTransactionType'
import { twMerge } from 'tailwind-merge'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '@/contexts/transactionsContext'
import { useContextSelector } from 'use-context-selector'

interface newTransactionModalProps {
  closeModal: () => void
}

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal({ closeModal }: newTransactionModalProps) {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({ description, price, category, type })

    reset()
    closeModal()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75" />
      <Dialog.Content
        className={twMerge(
          'fixed left-2/4 top-2/4 min-w-[32rem] -translate-x-2/4 -translate-y-2/4',
          'rounded-md bg-gray_800 px-12 py-10',
        )}
      >
        <Dialog.Title className="text-2xl font-bold text-gray_100">
          Nova transação
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer bg-transparent text-gray_500 ring-0 hover:text-green_500 hover:transition hover:duration-200">
          <X size={24} />
        </Dialog.Close>

        <form
          onSubmit={handleSubmit(handleCreateNewTransaction)}
          className="mt-8 flex flex-col gap-4"
        >
          <input
            type="text"
            className="input-modal"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            className="input-modal"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            className="input-modal"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  className="mt-2 flex gap-4"
                  value={field.value}
                >
                  <NewTransactionType
                    value="income"
                    transactionType="Entrada"
                  />
                  <NewTransactionType value="outcome" transactionType="Saída" />
                </RadioGroup.Root>
              )
            }}
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-6 h-14 cursor-pointer rounded-md bg-green_500 px-5 py-0 font-bold text-white enabled:hover:bg-green_700 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
