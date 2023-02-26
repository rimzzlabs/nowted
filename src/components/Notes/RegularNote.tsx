import { NoteListWrapper } from '@/components/NoteList'
import { useFolders } from '@/hooks/folder'
import { useNotes } from '@/hooks/notes'
import { clsxm } from '@/util/clsxm'
import { NoteCard } from '@/components/Note/NoteCard'
import type { OnClickCard } from '@/components/Note/NoteCard'
import { NoteTitle } from '@/components/Note/NoteTitle'
import { useActiveNote } from '@/hooks/note'

type TProps = {
  folderId: string
}

export const RegularNote = (props: TProps) => {
  const { notes: n } = useNotes()
  const { folders } = useFolders()
  const { updateNoteId, noteId } = useActiveNote()

  const notes = n.filter((n) => n.folder_id === props.folderId && !n.isArchived && !n.isTrashed)
  const folder = folders.find((f) => f.folder_id === props.folderId)
  const getActiveNote = (id: string) => noteId === id

  const onClickNoteCard: OnClickCard = (note) => {
    return () => updateNoteId(note.note_id)
  }

  if (!folder) return null

  return (
    <NoteListWrapper>
      <NoteTitle folderId={props.folderId} name={folder.name} />

      {notes.length === 0 && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>You haven&apos;t create a note on this folder</p>
        </div>
      )}

      {notes.length > 0 &&
        notes.map((n) => (
          <NoteCard
            onClick={onClickNoteCard}
            className={clsxm(getActiveNote(n.note_id) && 'bg-accent-4')}
            key={n.note_id}
            {...n}
          />
        ))}
    </NoteListWrapper>
  )
}
