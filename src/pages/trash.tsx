import { TrashedNote } from '@/components/Notes'
import { TrashBody } from '@/components/Trash'

export default function TrashPage() {
  return (
    <div className='flex'>
      <TrashedNote />
      <TrashBody />
    </div>
  )
}
