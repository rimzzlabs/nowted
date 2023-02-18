import { useActiveNote } from '@/hooks/useActiveNote'
import { useNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { NowtedHeader } from './NowtedHeader'

export const Nowted = () => {
  const { noteId } = useActiveNote()
  const { notes } = useNotes()

  const note = notes.find((n) => n.note_id === noteId)

  if (!noteId || !note) return null

  return (
    <div
      className={clsxm(
        'flex flex-col',
        'pt-[50px] px-[50px] pb-4',
        'w-[calc(100vw-650px)] h-screen',
        'bg-accent-1'
      )}
    >
      <NowtedHeader
        created_at={note.created_at}
        folderId={note.folder_id}
        noteId={note.note_id}
        title={note.title}
      />
    </div>
  )
}
