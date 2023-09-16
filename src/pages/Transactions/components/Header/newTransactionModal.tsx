import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X } from 'phosphor-react'
import { NewTransactionType } from './newTransactionType'
import { twMerge } from 'tailwind-merge'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75" />
      <Dialog.Content
        className={twMerge(
          'fixed left-2/4 top-2/4 min-w-[32rem] -translate-x-2/4 -translate-y-2/4',
          'rounded-md bg-gray_800 px-12 py-10',
          'focus:ring-0',
        )}
      >
        <Dialog.Title className="text-2xl font-bold text-gray_100">
          Nova transação
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer bg-transparent text-gray_500 ring-0 hover:text-green_500 hover:transition hover:duration-200">
          <X size={24} />
        </Dialog.Close>

        <form className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            className="input-modal"
            placeholder="Descrição"
            required
          />
          <input
            type="text"
            className="input-modal"
            placeholder="Preço"
            required
          />
          <input
            type="text"
            className="input-modal"
            placeholder="Categoria"
            required
          />

          <RadioGroup.Root className="mt-2 flex gap-4">
            <NewTransactionType id="income" transactionType="Entrada" />
            <NewTransactionType id="outcome" transactionType="Saída" />
          </RadioGroup.Root>

          <button
            type="submit"
            className="mt-6 h-14 cursor-pointer rounded-md bg-green_500 px-5 py-0 font-bold text-white hover:bg-green_700"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
