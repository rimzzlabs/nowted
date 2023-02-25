import { CgSpinner } from 'react-icons/cg'

export default function LoadingPage() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-accent-1'>
      <CgSpinner className='text-white w-14 h-14 animate-spin' />
    </div>
  )
}
