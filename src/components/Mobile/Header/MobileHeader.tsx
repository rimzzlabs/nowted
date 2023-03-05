import { useMediaLayout } from '@/hooks/useMediaLayout'
import { clsxm } from '@/util/clsxm'
import { useLocation, useParams } from 'react-router-dom'
import { MobileRecents } from '../Recents'
import { MobileHeaderMenu } from './MobileHeaderMenu'
import { MobileSearch } from './MobileSearch'

export const MobileHeader = () => {
  const { folderId } = useParams()
  const { pathname } = useLocation()
  const isBigScreen = useMediaLayout('1024px')
  const validURLClassName = ['/trash', '/favorites', '/archived']

  if (pathname === '/404' || isBigScreen) return null

  return (
    <header className='fixed top inset-x-0 z-50'>
      <div
        className={clsxm(
          'flex items-center',
          'px-5 h-16',
          'bg-accent-1',
          (folderId || validURLClassName.includes(pathname)) && 'bg-accent-2'
        )}
      >
        <MobileSearch />
        <MobileHeaderMenu />
      </div>

      <MobileRecents />
    </header>
  )
}
