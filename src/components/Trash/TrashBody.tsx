import { useNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { MdOutlineRestore } from 'react-icons/md'
import { ButtonDelete } from './ButtonDelete'
import { ButtonRestore } from './ButtonRestore'

export const TrashBody = () => {
  const { notes: n } = useNotes()

  const trashedNotes = n.filter((n) => n.isTrashed)

  if (trashedNotes.length === 0) return null

  return (
    <div
      className={clsxm(
        'w-[calc(100vw-650px)] h-screen',
        'flex flex-col',
        'items-center justify-center',
        'bg-accent-1'
      )}
    >
      <MdOutlineRestore className='w-20 h-20' />

      <p className='font-semibold text-[28px] mb-2'>Select a note to restore</p>
      <p className='text-center max-w-sm'>
        You can restore your note or you can delete it permanently
      </p>

      <div className='inline-flex mt-2'>
        <ButtonRestore />
        <ButtonDelete />
      </div>
    </div>
  )
}
