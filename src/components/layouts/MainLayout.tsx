import { Outlet } from 'react-router-dom'
import { ModalConfirm } from '../Modal'
import { Sidebar } from '../Sidebar'

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <ModalConfirm />
    </>
  )
}
