import { useMutateNotes } from '@/hooks/useMutateNotes'
import { clsxm } from '@/util/clsxm'
import { HiPlus } from 'react-icons/hi'
import { useParams } from 'react-router-dom'

export const SidebarNewNote = () => {
  const { folderId } = useParams()
  const { createNewNote } = useMutateNotes()

  const handleClick = () => {
    if (!folderId) return
    createNewNote(folderId)
  }

  return (
    <div className='px-[20px]'>
      <button
        disabled={!folderId}
        onClick={handleClick}
        className={clsxm(
          'w-full h-10',
          'flex items-center justify-center',
          'mx-auto transition',
          'bg-accent-3 hover:bg-accent-4',
          !folderId && 'opacity-50 hover:bg-accent-3'
        )}
      >
        <HiPlus className='mr-2' />
        <span>New Note</span>
      </button>
    </div>
  )
}
