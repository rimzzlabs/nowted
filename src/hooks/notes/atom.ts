import { atom } from 'jotai'
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

export const AtomQueryNotes = atom('')
export const AtomFilteredNotes = atom<Note[]>((get) => {
  const query = get(AtomQueryNotes)
  const notes = get(AtomNotes)
  if (query === '') return notes
  return notes.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()))
})
