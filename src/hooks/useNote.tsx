import { useAtomValue } from 'jotai'
import { AtomNotes } from './useNotes'

export const useNote = (noteId: null | string) => {
  const notes = useAtomValue(AtomNotes)

  return notes.find((n) => n.note_id === noteId)
}
