import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const ModalConfirm = () => {
  const { open, closeModal, data, onConfirm } = useModalConfirm()

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-[999]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div
            className={clsxm(
              'fixed inset-0',
              'bg-accent-1/20',
              'supports-[backdrop-filter:blur(0px)]:bg-accent-1/80',
              'supports-[backdrop-filter:blur(0px)]:backdrop-blur'
            )}
          />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                as='div'
                className={clsxm(
                  'w-full max-w-md',
                  'p-4 overflow-hidden',
                  'rounded-md transition-all',
                  'bg-accent-3'
                )}
              >
                <div className='pb-4 border-b border-b-accent-4'>
                  <Dialog.Title as='h3' className='text-xl font-semibold'>
                    {data?.title}
                  </Dialog.Title>
                </div>

                <div className='pt-4'>
                  <p className='whitespace-pre-wrap'>{data?.description}</p>

                  <div
                    className={clsxm('mt-4 w-full', 'flex items-center justify-end', 'space-x-2.5')}
                  >
                    <button
                      onClick={closeModal}
                      className={clsxm(
                        'inline-flex items-center',
                        'px-3.5 h-9 rounded-md transition',
                        'bg-accent-4 hover:bg-accent-2'
                      )}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onConfirm}
                      className={clsxm(
                        'inline-flex items-center',
                        'px-3.5 h-9 rounded-md transition',
                        'bg-red-600 hover:bg-red-900',
                        data?.confirmBtnStyle
                      )}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
