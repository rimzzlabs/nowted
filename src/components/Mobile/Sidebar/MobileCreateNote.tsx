import { useMutateNotes } from '@/hooks/notes'
import { clsxm } from '@/util/clsxm'
import { HiPlus } from 'react-icons/hi'
import { useParams } from 'react-router-dom'

export const MobileCreateNote = () => {
  const { createNewNote } = useMutateNotes()
  const { folderId } = useParams()
  const handleClick = () => {
    if (!folderId) return
    createNewNote(folderId)
  }

  return (
    <button
      disabled={!folderId}
      onClick={handleClick}
      className={clsxm(
        'flex items-center justify-center',
        'h-12 w-[calc(100%-32px)] px-2.5',
        'mx-auto space-x-2.5',
        'bg-accent-3'
      )}
    >
      <HiPlus />
      <span className='font-semibold'>New Note</span>
    </button>
  )
}
