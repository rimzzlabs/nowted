import { useRecents } from '@/hooks/recents'
import { MobileRecentItem } from './MobileRecentItem'

export const MobileRecents = () => {
  const { recents } = useRecents()

  return (
    <div className='flex items-center bg-accent-1'>
      {recents.map((noteId) => {
        return <MobileRecentItem key={noteId} noteId={noteId} />
      })}
    </div>
  )
}
