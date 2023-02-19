import { useActiveFolder } from '@/hooks/useActiveFolder'
import { Folder } from '@/hooks/useFolders'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { useMutateFolder } from '@/hooks/useMutateFolder'
import { clsxm } from '@/util/clsxm'
import { HiOutlineFolder, HiOutlineFolderOpen, HiOutlineTrash } from 'react-icons/hi'

export const SidebarFolderItem = (props: Folder) => {
  const { deleteFolder } = useMutateFolder()
  const { folderId, updateFolderId } = useActiveFolder()
  const { openModal } = useModalConfirm()
  const name = props.name.slice(0, 24)

  const handleClick = (id: string) => () => updateFolderId(id)
  const onConfirm = () => deleteFolder(props.folder_id)

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
        onClick={openModal({
          description: `Are you sure you want to delete this folder?.
          This will also delete all notes belonging to folder ${props.name}!`,
          title: 'Delete Folder?',
          onConfirm
        })}
        className='hidden group-hover:block transition-all ml-auto'
      >
        <HiOutlineTrash className='w-5 h-5 text-red-500' />
      </span>
    </button>
  )
}
