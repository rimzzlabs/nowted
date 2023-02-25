import { atom } from 'jotai'
import type { Note } from '@/hooks/useNotes'

export const AtomTrash = atom<Note[]>([])

export const AtomAddToTrash = atom<null, Note>(null, (get, set, payload) => {
  const oldTrash = get(AtomTrash)
  const trash = [...oldTrash, payload]
  set(AtomTrash, trash)
})

export const AtomRemoveFromTrash = atom<null, Note>(null, (get, set, note) => {
  const oldTrash = get(AtomTrash)
  const trash = oldTrash.filter((tr) => tr.note_id !== note.note_id)
  set(AtomTrash, trash)
})
