import { Sidebar } from '@/components/Sidebar'
import '@/tailwind.css'
import { useLocation } from 'react-router-dom'

export default function App(props: { children: React.ReactNode }) {
  const { pathname } = useLocation()

  if (pathname === '/404') return props.children

  return (
    <>
      <Sidebar />

      <div className='w-[calc(100vw-300px)] ml-auto'>{props.children}</div>
    </>
  )
}
