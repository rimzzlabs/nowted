import { useAtom } from 'jotai'
import { AtomNotes } from './atom'

export const useNotes = () => {
  const [notes, setNotes] = useAtom(AtomNotes)

  const orderedNotes = notes.sort((a, b) => {
    return new Date(a.created_at) > new Date(b.created_at)
      ? -1
      : new Date(a.created_at) < new Date(b.created_at)
      ? 1
      : 0
  })

  return { notes: orderedNotes, setNotes }
}
