import { useRecents } from '@/hooks/recents'
import { SidebarRecentItem } from './SidebarRecentItem'

export const SidebarRecent = () => {
  const { recents } = useRecents()

  return (
    <div>
      <div className='w-full mb-2 px-[20px]'>
        <p className='text-sm font-semibold'>Recents</p>
      </div>

      {recents.length === 0 && (
        <div className='flex items-center justify-center w-full h-40'>
          <p>Empty right now, open a note!</p>
        </div>
      )}

      {recents.length > 0 && (
        <div className='flex flex-col space-y-[5px]'>
          {recents.map((noteId) => (
            <SidebarRecentItem key={noteId} noteId={noteId} />
          ))}
        </div>
      )}
    </div>
  )
}
