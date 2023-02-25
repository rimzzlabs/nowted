import { atom, useAtom } from 'jotai'

export const AtomActiveNote = atom<string | null>(null)

export const useActiveNote = () => {
  const [noteId, setNoteId] = useAtom(AtomActiveNote)

  const updateNoteId = (noteId: string | null) => setNoteId(noteId)

  return { noteId, updateNoteId }
}
