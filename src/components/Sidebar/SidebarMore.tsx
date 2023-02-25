import { clsxm } from '@/util/clsxm'
import { HiOutlineArchive, HiOutlineStar, HiOutlineTrash } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const moreMenus = [
  { id: uuid(), path: '/favorites', name: 'Favorites', Icon: HiOutlineStar },
  { id: uuid(), path: '/trash', name: 'Trash', Icon: HiOutlineTrash },
  {
    id: uuid(),
    path: '/archived',
    name: 'Archived Notes',
    Icon: HiOutlineArchive
  }
] as const

export const SidebarMore = () => {
  const loc = useLocation()
  const nTo = useNavigate()

  const handleClick = (url: string) => () => nTo(url)

  return (
    <div className='w-full'>
      <p className='text-sm font-semibold mb-2 px-[20px]'>More</p>

      {moreMenus.map((menu) => (
        <button
          onClick={handleClick(menu.path)}
          key={menu.id}
          className={clsxm(
            'w-full',
            'flex items-center',
            'px-[20px] h-10',
            'transition hover:bg-accent-2',
            loc.pathname === menu.path && 'bg-accent-3'
          )}
        >
          <menu.Icon className='w-5 h-5 mr-[15px]' />
          <span className='font-semibold'>{menu.name}</span>
        </button>
      ))}
    </div>
  )
}
