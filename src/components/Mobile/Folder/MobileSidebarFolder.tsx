import { useFolders } from '@/hooks/folder'
import { MobileFolderItem } from './MobileFolderItem'

export const MobileSidebarFolder = () => {
  const { folders } = useFolders()

  return (
    <div>
      <div className='w-full mb-2 px-[20px]'>
        <p className='text-sm font-semibold'>Folders</p>
      </div>

      <div className='max-h-56 overflow-y-auto custom-sb'>
        <div className='flex flex-col overflow-y-auto'>
          {folders.map((folder) => (
            <MobileFolderItem key={folder.folder_id} {...folder} />
          ))}
        </div>
      </div>
    </div>
  )
}
