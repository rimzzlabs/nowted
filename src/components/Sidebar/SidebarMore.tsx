import { useMore } from '@/hooks/useMore'
import { clsxm } from '@/util/clsxm'
import { HiOutlineArchive, HiOutlineStar, HiOutlineTrash } from 'react-icons/hi'
import { v4 as uuid } from 'uuid'

const moreMenus = [
  { id: uuid(), type: 'favorites', name: 'Favorites', Icon: HiOutlineStar },
  { id: uuid(), type: 'trash', name: 'Trash', Icon: HiOutlineTrash },
  { id: uuid(), type: 'archived', name: 'Archived Notes', Icon: HiOutlineArchive }
] as const

export const SidebarMore = () => {
  const { more, updateMore } = useMore()

  const handleClick = (type: 'archived' | 'trash' | 'favorites') => () => updateMore(type)

  return (
    <div className='w-full'>
      <p className='text-sm font-semibold mb-2 px-[20px]'>More</p>

      {moreMenus.map((menu) => (
        <button
          onClick={handleClick(menu.type)}
          key={menu.id}
          className={clsxm(
            'w-full',
            'flex items-center',
            'px-[20px] h-10',
            'transition hover:bg-accent-2',
            more === menu.type && 'bg-accent-3'
          )}
        >
          <menu.Icon className='w-5 h-5 mr-[15px]' />
          <span className='font-semibold'>{menu.name}</span>
        </button>
      ))}
    </div>
  )
}
