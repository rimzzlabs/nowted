import { useMediaLayout } from '@/hooks/useMediaLayout'

type TProps = {
  children: React.ReactNode
}

export const NoteListWrapper = (props: TProps) => {
  const isBigScreen = useMediaLayout('1024px')
  if (!isBigScreen) return null

  return (
    <div className='w-[350px] pb-[23px] px-5 h-screen overflow-y-auto custom-sb bg-accent-2'>
      {props.children}
    </div>
  )
}
