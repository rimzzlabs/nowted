import { clsxm } from '@/util/clsxm'
import { MdOutlineUnarchive } from 'react-icons/md'
import { ButtonUnarchive } from './ButtonUnarchive'

export const ArchivedBody = () => {
  return (
    <div
      className={clsxm(
        'w-[calc(100vw-650px)] h-screen',
        'flex flex-col',
        'items-center justify-center',
        'bg-accent-1'
      )}
    >
      <MdOutlineUnarchive className='w-20 h-20' />

      <p className='font-semibold text-[28px] mb-2'>Restore Notes</p>
      <p className='text-center max-w-sm mb-2'>
        Select notes to restore from archived. Then you can access the note again.
      </p>

      <ButtonUnarchive />
    </div>
  )
}
