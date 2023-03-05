import { NewFolder } from '@/components/Folder/NewFolder'
import { useCreateFolder, useFolders } from '@/hooks/folder'
import { HiOutlineFolderAdd } from 'react-icons/hi'
import { MobileFolderItem } from './MobileFolderItem'

export const MobileSidebarFolder = () => {
  const { folders } = useFolders()
  const { onClickButton, active } = useCreateFolder()

  return (
    <div>
      <div className='flex items-center justify-between w-full mb-2 px-4'>
        <p className='text-sm font-semibold'>Folders</p>
        <button onClick={onClickButton}>
          <HiOutlineFolderAdd className='text-text-2' />
        </button>
      </div>

      {folders.length === 0 && !active && (
        <div className='flex items-center justify-center w-full h-10'>
          <p className='text-xs font-medium'>Folders are empty, create one to start!</p>
        </div>
      )}

      <NewFolder />

      {folders.length > 0 && (
        <div className='max-h-36 overflow-y-auto custom-sb'>
          <div className='flex flex-col overflow-y-auto'>
            {folders.map((folder) => (
              <MobileFolderItem key={folder.folder_id} {...folder} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
