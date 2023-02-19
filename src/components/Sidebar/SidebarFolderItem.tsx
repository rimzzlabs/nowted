import { useActiveFolder } from '@/hooks/useActiveFolder'
import { Folder } from '@/hooks/useFolders'
import { useMutateFolder } from '@/hooks/useMutateFolder'
import { clsxm } from '@/util/clsxm'
import { HiOutlineFolder, HiOutlineFolderOpen, HiOutlineTrash } from 'react-icons/hi'

export const SidebarFolderItem = (props: Folder) => {
  const { deleteFolder } = useMutateFolder()
  const { folderId, updateFolderId } = useActiveFolder()
  const name = props.name.slice(0, 24)

  const handleDelete = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    deleteFolder(id)
  }
  const handleClick = (id: string) => () => updateFolderId(id)

  return (
    <button
      onClick={handleClick(props.folder_id)}
      className={clsxm(
        'group flex items-center',
        'w-full h-10',
        'px-[20px] transition',
        'hover:bg-accent-2',
        folderId === props.folder_id && 'bg-accent-3'
      )}
    >
      {folderId === props.folder_id && <HiOutlineFolderOpen className='w-5 h-5 mr-[15px]' />}
      {folderId !== props.folder_id && <HiOutlineFolder className='w-5 h-5 mr-[15px]' />}
      <span className='font-semibold truncate'>{name}</span>

      <span
        onClick={handleDelete(props.folder_id)}
        className='hidden group-hover:block transition-all ml-auto'
      >
        <HiOutlineTrash className='w-5 h-5 text-red-500' />
      </span>
    </button>
  )
}
