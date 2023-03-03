import { HiPencil } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { SidebarFolder } from '@/components/Folder'
import { SidebarMore } from './SidebarMore'
import { SidebarNewNote } from './SidebarNewNote'
import { SidebarRecent } from './SidebarRecent'
import { SidebarSearch } from './SidebarSearch'
import { useSearchNotes } from '@/hooks/notes/useSearchNotes'
import { useMediaLayout } from '@/hooks/useMediaLayout'

export const Sidebar = () => {
  const { active } = useSearchNotes()
  const { pathname } = useLocation()
  const isBigScreen = useMediaLayout('1024px')

  if (pathname === '/404' || !isBigScreen) return null

  return (
    <aside className='fixed inset-y-0 left-0 z-50'>
      <div className='w-[300px] space-y-[30px] h-full py-[30px] bg-accent-1'>
        <div className='flex items-center px-5'>
          {!active && (
            <Link to='/' className='flex'>
              <p className='font-title h-[38px] text-[26px]'>Nowted</p>
              <HiPencil className='ml-2.5' />
            </Link>
          )}

          <SidebarSearch />
        </div>

        <SidebarNewNote />
        <SidebarRecent />

        <SidebarFolder />
        <SidebarMore />
      </div>
    </aside>
  )
}
