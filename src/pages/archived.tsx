import { ArchivedBody } from '@/components/Archived'
import { ArchivedNote } from '@/components/Notes'

export default function HomePage() {
  return (
    <div className='flex'>
      <ArchivedNote />
      <ArchivedBody />
    </div>
  )
}
