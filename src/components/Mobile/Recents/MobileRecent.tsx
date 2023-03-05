import { useRecents } from '@/hooks/recents'
import { clsxm } from '@/util/clsxm'
import { MobileRecentItem } from './MobileRecentItem'

export const MobileRecents = () => {
  const { recents } = useRecents()

  return (
    <div className={clsxm('flex items-center', 'h-10', 'bg-accent-1')}>
      <div className='flex items-center'>
        {recents.map((noteId) => {
          return <MobileRecentItem key={noteId} noteId={noteId} />
        })}
      </div>
    </div>
  )
}
