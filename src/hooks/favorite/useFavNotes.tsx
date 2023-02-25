import { useNotes } from '@/hooks/notes'

export const useFavNotes = () => {
  const { notes } = useNotes()

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
