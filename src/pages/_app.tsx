import { AtomQueryNotes } from '@/hooks/notes'
import { useMediaLayout } from '@/hooks/useMediaLayout'
import '@/tailwind.css'
import { clsxm } from '@/util/clsxm'
import { useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function App(props: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const setQuery = useSetAtom(AtomQueryNotes)
  const mounted = useRef(false)

  const isBigScreen = useMediaLayout('1024px')

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    setQuery('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  if (pathname === '/404') return props.children

  return (
    <div className={clsxm(isBigScreen && 'w-[calc(100vw-300px)] ml-auto')}>{props.children}</div>
  )
}
