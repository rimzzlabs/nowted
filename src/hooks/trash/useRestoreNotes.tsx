import { useAtomValue, useSetAtom } from 'jotai'
import { useMutateNote } from '@/hooks/note'
import { AtomRemoveFromTrash, AtomTrash } from './atom'

export const useRestoreNotes = () => {
  const selecteNotes = useAtomValue(AtomTrash)
  const removeFromTrash = useSetAtom(AtomRemoveFromTrash)
  const { updateTrash } = useMutateNote()

  const restoreNotes = () => {
    selecteNotes.forEach((note) => {
      updateTrash(note.note_id, false)
      removeFromTrash(note)
    })
  }

  return { restoreNotes }
}
