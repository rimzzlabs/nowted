import { ImSpinner6 } from 'react-icons/im'

export default function LoadingPage() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-accent-1'>
      <ImSpinner6 className='text-white w-14 h-14 animate-spin' />
    </div>
  )
}
