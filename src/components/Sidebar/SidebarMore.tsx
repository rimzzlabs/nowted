import { HiOutlineArchive, HiOutlineStar, HiOutlineTrash } from 'react-icons/hi'
import { v4 as uuid } from 'uuid'

const moreMenus = [
  { id: uuid(), path: '/fav', name: 'Favorites', Icon: HiOutlineStar },
  { id: uuid(), path: '/trash', name: 'Trash', Icon: HiOutlineTrash },
  { id: uuid(), path: '/archived', name: 'Archived Notes', Icon: HiOutlineArchive }
]

export const SidebarMore = () => {
  return (
    <div className='w-full'>
      <p className='text-sm font-semibold mb-2 px-[20px]'>More</p>

      {moreMenus.map((menu) => (
        <button
          key={menu.id}
          className='w-full px-[20px] flex items-center h-10 transition hover:bg-accent-2'
        >
          <menu.Icon className='w-5 h-5 mr-[15px]' />
          <span className='font-semibold'>{menu.name}</span>
        </button>
      ))}
    </div>
  )
}
