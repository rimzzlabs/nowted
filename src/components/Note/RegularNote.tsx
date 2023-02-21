import { NoteList } from '@/components/NoteList'
import { useFolders } from '@/hooks/useFolders'
import { useNotes } from '@/hooks/useNotes'

type TProps = {
  folderId: string
}

export const RegularNote = (props: TProps) => {
  const { notes: n } = useNotes()
  const { folders } = useFolders()

  const notes = n.filter((n) => n.folder_id === props.folderId && !n.isArchived && !n.isTrashed)
  const folder = folders.find((f) => f.folder_id === props.folderId)

  if (!folder) return null

  return (
    <NoteList
      notes={notes}
      title={folder.name}
      show={!!props.folderId}
      emptyText="It appear you haven't create a note on this folder yet, why don't you createone?"
    />
  )
}
