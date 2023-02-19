import { useActiveNote } from '@/hooks/useActiveNote'
import { Note } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { formatDate, removeHTMLTag } from '@/util/notes'
export const NoteListItem = (props: Note) => {
  const { noteId, updateNoteId } = useActiveNote()

  const handleClick = (noteId: string) => () => updateNoteId(noteId)

  return (
    <div
      onClick={handleClick(props.note_id)}
      className={clsxm(
        'w-full',
        'p-5 rounded transition',
        'mb-5 last-of-type:mb-0 cursor-pointer',
        noteId !== props.note_id && 'bg-accent-3 hover:bg-accent-4',
        noteId === props.note_id && 'bg-accent-4'
      )}
    >
      <p className='text-lg font-semibold mb-2.5'>{props.title}</p>

      <div className='flex items-center select-none'>
        <span className='text-text-2 mr-2.5'>{formatDate(props.created_at)}</span>
        <span className='truncate'>{removeHTMLTag(props.content)}</span>
      </div>
    </div>
  )
}
