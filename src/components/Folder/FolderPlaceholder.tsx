import { clsxm } from '@/util/clsxm'
import { HiOutlineFolder } from 'react-icons/hi'

export const FolderPlaceholder = (props: { className?: string }) => {
  return (
    <div
      className={clsxm(
        'w-[calc(100vw-300px)] h-screen',
        'flex flex-col',
        'items-center justify-center',
        'bg-accent-2',
        props.className
      )}
    >
      <HiOutlineFolder className='w-20 h-20' />

      <p className='font-semibold text-[28px] mb-2'>Select a folder to start</p>
      <p className='text-center max-w-sm'>
        Choose a folder from the sidebar to start. Or create a new folder to add to your collection.
      </p>
    </div>
  )
}
