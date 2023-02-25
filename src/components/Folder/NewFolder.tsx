import { useCreateFolder } from '@/hooks/folder/useCreateFolder'
import { clsxm } from '@/util/clsxm'
import { HiOutlineFolder } from 'react-icons/hi'

export const NewFolder = () => {
  const { active, name, onBlur, onChangeName, onKeyDown } = useCreateFolder()
  if (!active) return null

  return (
    <div
      className={clsxm(
        'w-full h-10',
        'flex items-center',
        'px-[20px] mb-[5px]'
      )}
    >
      <HiOutlineFolder className='w-5 h-5 mr-[15px]' />

      <input
        value={name}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={onChangeName}
        autoFocus
        type='text'
        className={clsxm(
          'outline-none bg-transparent px-1',
          'border border-accent-4'
        )}
      />
    </div>
  )
}
