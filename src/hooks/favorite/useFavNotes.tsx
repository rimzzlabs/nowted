import { AtomFilteredNotes } from '@/hooks/notes'
import { useAtomValue } from 'jotai'

export const useFavNotes = () => {
  const notes = useAtomValue(AtomFilteredNotes)

  const favNotes = notes
    .filter((n) => n.isFavorite)
    .sort((a, b) => {
      return new Date(a.created_at) > new Date(b.created_at)
        ? -1
        : new Date(a.created_at) < new Date(b.created_at)
        ? 1
        : 0
    })

  return { favNotes }
}
