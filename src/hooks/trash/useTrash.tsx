import { OnClickCard } from '@/components/Note'
import { useAtomValue, useSetAtom } from 'jotai'
import { AtomAddToTrash, AtomRemoveFromTrash, AtomTrash } from './atom'

export const useTrash = () => {
  const selectedNotes = useAtomValue(AtomTrash)
  const addToSelected = useSetAtom(AtomAddToTrash)
  const removeFromSelected = useSetAtom(AtomRemoveFromTrash)

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
