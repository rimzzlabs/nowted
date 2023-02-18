import { HiOutlineFolderAdd } from 'react-icons/hi'
import { useFolders } from '@/hooks/useFolders'
import { SidebarFolderItem } from './SidebarFolderItem'
import { useCreateFolder } from '@/hooks/useCreateFolder'
import { SidebarNewFolder } from './SidebarNewFolder'

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
        <div className='flex items-center justify-center w-full h-40'>
          <p>Folders are empty, create one to start!</p>
        </div>
      )}

      <SidebarNewFolder />

      {folders.length > 0 && (
        <div className='flex flex-col space-y-[5px]'>
          {folders.map((folder) => (
            <SidebarFolderItem key={folder.folder_id} {...folder} />
          ))}
        </div>
      )}
    </div>
  )
}
