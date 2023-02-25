import { useAtomValue, useSetAtom } from 'jotai'
import { useMutateNote } from '@/hooks/note'
import { AtomRemoveFromArchive, AtomSelectedArchivedNotes } from './atom'

export const useUnarchive = () => {
  const { updateArchive } = useMutateNote()
  const selectedNotes = useAtomValue(AtomSelectedArchivedNotes)
  const removeFromSelected = useSetAtom(AtomRemoveFromArchive)

  const unarchiveNotes = () => {
    selectedNotes.forEach((note) => {
      updateArchive(note.note_id, false)
      removeFromSelected(note)
    })
  }

  return { unarchiveNotes }
}
