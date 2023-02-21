import { NoteList } from '@/components/NoteList'
import { useNotes } from '@/hooks/useNotes'

type TProps = {
  type: string
}

export const ArchivedNote = (props: TProps) => {
  const { notes: n } = useNotes()

  const archivedNotes = n.filter((n) => n.isArchived)

  return (
    <NoteList
      notes={archivedNotes}
      title='Archived'
      show={!!props.type}
      emptyText='Nothing to see here!'
    />
  )
}
