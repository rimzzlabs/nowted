import { useAtomValue } from 'jotai'
import { useMutateNote } from '@/hooks/useMutateNote'
import { AtomNotes } from '@/hooks/useNotes'
import { NoteMenu } from '@/components/Nowted/NowtedMoreButton'
import { useActiveNote } from '../useActiveNote'

export const useMoreButton = () => {
  const notes = useAtomValue(AtomNotes)
  const { updateArchive, updateFavorite, updateTrash } = useMutateNote()
  const { updateNoteId } = useActiveNote()

  const setFavorites = (noteId: string) => {
    const note = notes.find((n) => n.note_id === noteId)
    if (!note) return
    const newValue = !note.isFavorite
    updateFavorite(noteId, newValue)
  }

  const setArchive = (noteId: string) => {
    const note = notes.find((n) => n.note_id === noteId)
    if (!note) return
    const newValue = !note.isArchived
    updateArchive(noteId, newValue)
    updateNoteId(null)
  }

  const setTrash = (noteId: string) => {
    const note = notes.find((n) => n.note_id === noteId)
    if (!note) return
    const newValue = !note.isTrashed
    updateTrash(noteId, newValue)
    updateNoteId(null)
  }

  const isBool = (noteId: string, key: 'isArchived' | 'isTrashed' | 'isFavorite') => {
    const note = notes.find((n) => n.note_id === noteId)
    if (!note) return false
    return note[key]
  }

  const getText = (noteId: string, type: NoteMenu['type']) => {
    if (type === 'archive') {
      const isArchived = isBool(noteId, 'isArchived')
      if (isArchived)
        return { title: 'Unarchive note?', description: 'This will unarchive note, you sure?.' }

      return {
        title: 'Archice note?',
        description:
          'This will archive note. You can see your archived notes from the left panel menu, you sure?.'
      }
    }

    if (type === 'delete') {
      const isTrashed = isBool(noteId, 'isTrashed')
      if (isTrashed)
        return { title: 'Restore note?', description: 'This note will be restored, you sure?.' }

      return {
        title: 'Delete note?',
        description:
          'This will delete the note. You can still see it on trash folder on the left menu, you sure?.'
      }
    }
    const isFavorite = isBool(noteId, 'isFavorite')
    if (isFavorite) {
      return {
        title: 'Remove from favorites?',
        description: 'This note will be removed from your favorite notes, you sure?.'
      }
    }

    return {
      title: 'Add to favorites?',
      description: 'This note will be added to your favorite notes, you sure?.'
    }
  }

  return { setFavorites, setArchive, setTrash, isBool, getText }
}
