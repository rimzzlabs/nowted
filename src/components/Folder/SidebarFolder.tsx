import { HiOutlineFolderAdd } from 'react-icons/hi'
import { useFolders } from '@/hooks/folder'
import { useCreateFolder } from '@/hooks/folder/useCreateFolder'
import { FolderItem } from './FolderItem'
import { NewFolder } from './NewFolder'

export const SidebarFolder = () => {
  const { folders } = useFolders()
  const { onClickButton, active } = useCreateFolder()

  return (
    <div>
      <div className='flex items-center justify-between mb-2 px-[20px]'>
        <p className='text-sm font-semibold'>Folders</p>
        <button onClick={onClickButton}>
          <HiOutlineFolderAdd className='w-5 h-5 text-text-2' />
        </button>
      </div>

      {folders.length === 0 && !active && (
        <div className='flex items-center justify-center w-full h-10'>
          <p className='text-xs font-medium'>
            Folders are empty, create one to start!
          </p>
        </div>
      )}

      <NewFolder />

      {folders.length > 0 && (
        <div className='flex flex-col space-y-[5px]'>
          {folders.map((folder) => (
            <FolderItem key={folder.folder_id} {...folder} />
          ))}
        </div>
      )}
    </div>
  )
}
