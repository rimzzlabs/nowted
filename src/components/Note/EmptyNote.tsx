import { useMediaLayout } from '@/hooks/useMediaLayout'
import { clsxm } from '@/util/clsxm'
import { HiOutlineDocumentText } from 'react-icons/hi'

export const EmptyNote = () => {
  const isBigScreen = useMediaLayout('1024px')

  return (
    <div
      className={clsxm(
        'h-screen w-full flex flex-col',
        'items-center justify-center',
        'bg-accent-1',
        isBigScreen && 'w-[calc(100vw-650px)]'
      )}
    >
      <HiOutlineDocumentText className='w-20 h-20' />

      <p className='font-semibold text-[28px] mb-2'>Select a note to view</p>
      <p className='text-center max-w-sm'>
        Choose a note. Or create a new note to add to your collection.
      </p>
    </div>
  )
}
