import { ImSpinner6 } from 'react-icons/im'

export default function LoadingPage() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-theme-900'>
      <ImSpinner6 className='text-primary-500 w-14 h-14 animate-spin' />
    </div>
  )
}
