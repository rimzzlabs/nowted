import { createNote } from '@/util/notes'
import { useSetAtom } from 'jotai'
import { AtomNotes } from './useNotes'

export const useMutateNotes = () => {
  const setNotes = useSetAtom(AtomNotes)

  const createNewNote = (folderId: string) => {
    const note = createNote(folderId)
    setNotes((prev) => [...prev, note])
  }

  return { createNewNote }
}
