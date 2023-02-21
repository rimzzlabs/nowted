import { NoteList } from '@/components/NoteList'
import { useNotes } from '@/hooks/useNotes'

type TProps = {
  type: string
}

export const FavoritesNote = (props: TProps) => {
  const { notes: n } = useNotes()

  const archivedNotes = n.filter((n) => n.isFavorite)

  return (
    <NoteList
      notes={archivedNotes}
      title='Favorites'
      show={!!props.type}
      emptyText='Add some of em, so you can see them here!'
    />
  )
}
