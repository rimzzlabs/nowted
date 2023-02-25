import { useSetAtom } from 'jotai'
import { Note, AtomNotes } from '@/hooks/notes'

export const useMutateNote = () => {
  const setNotes = useSetAtom(AtomNotes)

  const getModifiedNote = (noteId: string, notes: Note[], payload: Partial<Note>) => {
    const targetNote = notes.find((n) => n.note_id === noteId)
    if (!targetNote) return notes
    const newNote: Note = {
      ...targetNote,
      ...payload
    }

    const sliced = notes.filter((n) => n.note_id !== noteId)

    return [...sliced, newNote]
  }

  const updateTitle = (noteId: string, title: string) => {
    setNotes((notes) => getModifiedNote(noteId, notes, { title }))
  }

  const updateContent = (noteId: string, content: string) => {
    setNotes((notes) => getModifiedNote(noteId, notes, { content }))
  }

  const updateFavorite = (noteId: string, isFavorite: boolean) => {
    setNotes((notes) => getModifiedNote(noteId, notes, { isFavorite }))
  }

  const updateArchive = (noteId: string, isArchived: boolean) => {
    setNotes((notes) => getModifiedNote(noteId, notes, { isArchived, isFavorite: false }))
  }

  const updateTrash = (noteId: string, isTrashed: boolean) => {
    setNotes((notes) =>
      getModifiedNote(noteId, notes, { isTrashed, isFavorite: false, isArchived: false })
    )
  }

  return { updateTitle, updateContent, updateFavorite, updateArchive, updateTrash }
}
