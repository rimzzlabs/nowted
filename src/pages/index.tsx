import { NoteList } from '@/components/NoteList'
import { Nowted } from '@/components/Nowted'

export default function HomePage() {
  return (
    <div className='flex'>
      <NoteList />
      <Nowted />
    </div>
  )
}
