import { AtomQueryNotes } from '@/hooks/notes'
import '@/tailwind.css'
import { useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function App(props: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const setQuery = useSetAtom(AtomQueryNotes)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    setQuery('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  if (pathname === '/404') return props.children

  return <div className='w-[calc(100vw-300px)] ml-auto'>{props.children}</div>
}
