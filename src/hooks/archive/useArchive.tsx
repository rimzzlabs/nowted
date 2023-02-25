import type { OnClickCard } from '@/components/Note'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  AtomRemoveFromArchive,
  AtomSelectArchivedNotes,
  AtomSelectedArchivedNotes
} from './atom'

export const useArchive = () => {
  const selectedNotes = useAtomValue(AtomSelectedArchivedNotes)
  const addToSelected = useSetAtom(AtomSelectArchivedNotes)
  const removeFromSelected = useSetAtom(AtomRemoveFromArchive)

  const selectedHasNote = (id: string) =>
    selectedNotes.some((n) => n.note_id === id)

  const onClickNoteCard: OnClickCard = (note) => {
    return () => {
      if (selectedHasNote(note.note_id)) {
        removeFromSelected(note)
        return
      }
      addToSelected(note)
    }
  }

  return { onClickNoteCard, selectedHasNote }
}
