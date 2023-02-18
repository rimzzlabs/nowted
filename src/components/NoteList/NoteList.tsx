import { useActiveFolder } from '@/hooks/useActiveFolder'
import { useNotes } from '@/hooks/useNotes'
import { NoteListItem } from './NoteListItem'
import { NoteListTitle } from './NoteListTitle'

export const NoteList = () => {
  const { folderId } = useActiveFolder()
  const { notes } = useNotes()

  const filteredNotes = notes.filter((n) => n.folder_id === folderId)

  if (!folderId) return null

  return (
    <div className='w-[350px] pb-[23px] px-5 h-screen overflow-y-auto custom-sb'>
      <NoteListTitle folderId={folderId} />

      {filteredNotes.length > 0 &&
        filteredNotes.map((n) => <NoteListItem key={n.note_id} {...n} />)}
    </div>
  )
}
