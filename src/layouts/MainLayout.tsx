import { MobileHeader, MobileSidebar } from '@/components/Mobile'
import { Outlet } from 'react-router-dom'
import { ModalConfirm } from '@/components/Modal'
import { Sidebar } from '@/components/Sidebar'

export const MainLayout = () => {
  return (
    <>
      <MobileHeader />
      <MobileSidebar />
      <Sidebar />
      <Outlet />
      <ModalConfirm />
    </>
  )
}
