import { Folder, useMutateFolder } from '@/hooks/folder'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import {
  HiOutlineFolder,
  HiOutlineFolderOpen,
  HiOutlineTrash
} from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { UnstyledLink } from '../UnstyledLink'

export const FolderItem = (props: Folder) => {
  const { deleteFolder } = useMutateFolder()
  const { openModal } = useModalConfirm()
  const { folderId } = useParams()

  const name =
    props.name.length > 27 ? props.name.slice(0, 24) + '...' : props.name

  const onConfirm = () => deleteFolder(props.folder_id)

  return (
    <UnstyledLink
      to={'/folder/' + props.folder_id}
      className={clsxm(
        'group flex items-center',
        'w-full h-10',
        'px-[20px] transition',
        'hover:bg-accent-2',
        folderId === props.folder_id && 'bg-accent-3'
      )}
    >
      {folderId === props.folder_id && (
        <HiOutlineFolderOpen className='w-5 h-5 mr-[15px]' />
      )}
      {folderId !== props.folder_id && (
        <HiOutlineFolder className='w-5 h-5 mr-[15px]' />
      )}
      <span className='font-semibold truncate'>{name}</span>

      <span
        onClick={openModal({
          description: `Are you sure you want to delete this folder?. This will also delete all notes belonging to folder ${props.name}!`,
          title: 'Delete Folder?',
          onConfirm
        })}
        className='hidden group-hover:block transition-all ml-auto'
      >
        <HiOutlineTrash className='w-5 h-5 text-red-500' />
      </span>
    </UnstyledLink>
  )
}
