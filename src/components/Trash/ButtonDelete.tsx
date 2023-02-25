import { AtomTrash, useDeleteNotes } from '@/hooks/trash'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import { useAtomValue } from 'jotai'

export const ButtonDelete = () => {
  const selectedNotes = useAtomValue(AtomTrash)
  const { openModal } = useModalConfirm()
  const { deleteNotes } = useDeleteNotes()

  const onClick = openModal({
    description: `You will PERMANENTLY DELETE ${selectedNotes.length} notes, ARE YOU SURE ABOUT THIS?.`,
    title: 'Delete notes permanently?',
    onConfirm: deleteNotes
  })

  return (
    <button
      onClick={onClick}
      disabled={selectedNotes.length === 0}
      className={clsxm(
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'inline-flex items-center',
        'h-9 px-4 rounded transition',
        'bg-red-700 text-white',
        'hover:bg-red-800 active:bg-red-900',
        'disabled:hover:bg-red-700 disabled:active:bg-red-700'
      )}
    >
      Delete
    </button>
  )
}
