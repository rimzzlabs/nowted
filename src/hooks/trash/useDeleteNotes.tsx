import { useAtom } from 'jotai'
import { AtomNotes, Note } from '@/hooks/notes'
import { AtomTrash } from './atom'

export const useDeleteNotes = () => {
  const [trash, setTrash] = useAtom(AtomTrash)
  const [notes, setNotes] = useAtom(AtomNotes)

  const deleteNotes = () => {
    const newNotes = notes.reduce((acc, n) => {
      const deletedNote = trash.some((tr) => tr.note_id === n.note_id)
      if (deletedNote) {
        return acc
      }

      acc.push(n)
      return acc
    }, [] as Note[])

    setNotes(newNotes)
    setTrash([])
  }

  return { deleteNotes }
}
