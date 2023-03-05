import { useMobileMenu } from '@/hooks/useMobileMenu'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

export const MobileHeaderMenu = () => {
  const [isOpen, toggleMenu] = useMobileMenu()
  return (
    <button onClick={toggleMenu} className='ml-4'>
      {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
    </button>
  )
}
