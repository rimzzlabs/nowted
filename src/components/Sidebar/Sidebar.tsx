import { HiOutlineSearch, HiPencil } from 'react-icons/hi'
import { SidebarFolder } from './SidebarFolder'
import { SidebarMore } from './SidebarMore'
import { SidebarNewNote } from './SidebarNewNote'
import { SidebarRecent } from './SidebarRecent'

export const Sidebar = () => {
  return (
    <aside className='fixed inset-y-0 left-0'>
      <div className='w-[300px] space-y-[30px] h-full py-[30px] bg-accent-1'>
        <div className='flex px-5'>
          <p className='font-title h-[38px] text-[26px]'>Nowted</p>
          <HiPencil className='ml-2.5' />

          <button className='ml-auto'>
            <HiOutlineSearch />
          </button>
        </div>

        <SidebarNewNote />
        <SidebarRecent />

        <SidebarFolder />
        <SidebarMore />
      </div>
    </aside>
  )
}
