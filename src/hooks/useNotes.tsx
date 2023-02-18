import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export type Note = {
  note_id: string
  folder_id: string
  title: string
  created_at: string
  content: string
  isFavorite: boolean
  isArchived: boolean
  isTrashed: boolean
}

export const NOTES_KEY = 'X-NOTE-LIST'
export const AtomNotes = atomWithStorage<Note[]>(NOTES_KEY, [])

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
