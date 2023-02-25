import { AtomSelectedArchivedNotes, useUnarchive } from '@/hooks/archive'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import { useAtomValue } from 'jotai'

export const ButtonUnarchive = () => {
  const selectedNotes = useAtomValue(AtomSelectedArchivedNotes)
  const { unarchiveNotes } = useUnarchive()
  const { openModal } = useModalConfirm()

  const onClick = openModal({
    description: `You will restore ${selectedNotes.length} notes, after this, you can access the note again on it's corresponding folder.`,
    title: 'Restore notes?',
    onConfirm: unarchiveNotes,
    confirmBtnStyle: 'bg-blue-700 text-white'
  })

  return (
    <button
      onClick={onClick}
      disabled={selectedNotes.length === 0}
      className={clsxm(
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'inline-flex items-center',
        'h-9 px-4 rounded transition',
        'bg-primary text-white'
      )}
    >
      Restore
    </button>
  )
}
