import { AtomTrash, useRestoreNotes } from '@/hooks/trash'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import { useAtomValue } from 'jotai'

export const ButtonRestore = () => {
  const selectedNotes = useAtomValue(AtomTrash)
  const { restoreNotes } = useRestoreNotes()
  const { openModal } = useModalConfirm()

  const onClick = openModal({
    description: `You will restore ${selectedNotes.length} note, after this, you can access the note again on it's corresponding folder.`,
    title: 'Restore notes?',
    onConfirm: restoreNotes,
    confirmBtnStyle: 'bg-blue-700 text-white'
  })

  return (
    <button
      onClick={onClick}
      disabled={selectedNotes.length === 0}
      className={clsxm(
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'inline-flex items-center',
        'h-9 px-4 rounded mr-4 transition',
        'bg-blue-700 text-white',
        'hover:bg-blue-800 active:bg-blue-900',
        'disabled:hover:bg-blue-700 disabled:active:bg-blue-700'
      )}
    >
      Restore
    </button>
  )
}
