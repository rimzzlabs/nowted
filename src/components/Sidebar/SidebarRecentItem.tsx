import { useActiveFolder } from '@/hooks/useActiveFolder'
import { useActiveNote } from '@/hooks/useActiveNote'
import { useNote } from '@/hooks/useNote'
import { clsxm } from '@/util/clsxm'
import { HiOutlineDocumentText } from 'react-icons/hi'

type TProps = {
  noteId: string
}

export const SidebarRecentItem = (props: TProps) => {
  const { updateNoteId, noteId } = useActiveNote()
  const { updateFolderId } = useActiveFolder()
  const note = useNote(props.noteId)

  const getName = (name: string) => {
    if (name.length > 30) return name.slice(0, 27) + '...'
    return name
  }

  const handleClick = (noteId: string, folderId: string) => () => {
    updateFolderId(folderId)
    updateNoteId(noteId)
  }

  if (!note) return null

  return (
    <button
      onClick={handleClick(note.note_id, note.folder_id)}
      className={clsxm(
        'group flex items-center',
        'w-full h-10',
        'px-[20px] transition',
        'hover:bg-accent-2',
        noteId === props.noteId && 'bg-accent-3'
      )}
    >
      <HiOutlineDocumentText className='w-5 h-5 mr-[15px]' />
      <span className='font-semibold truncate'>{getName(note.title)}</span>
    </button>
  )
}
