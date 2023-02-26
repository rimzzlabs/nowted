import { atom } from 'jotai'
import { Note } from '@/hooks/notes'

export const AtomSelectedArchivedNotes = atom<Note[]>([])

export const AtomSelectArchivedNotes = atom<null, Note>(null, (get, set, payload) => {
  const oldArchived = get(AtomSelectedArchivedNotes)
  const selectedArchived = [...oldArchived, payload]
  set(AtomSelectedArchivedNotes, selectedArchived)
})

export const AtomRemoveFromArchive = atom<null, Note>(null, (get, set, note) => {
  const oldArchived = get(AtomSelectedArchivedNotes)
  const selectedArchived = oldArchived.filter((tr) => tr.note_id !== note.note_id)
  set(AtomSelectedArchivedNotes, selectedArchived)
})
