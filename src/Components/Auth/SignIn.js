import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from "react-icons/fc";

export default function SignIn({isOpen, setIsOpen, ...props}) {
    function closeModal() {
        setIsOpen(false);
    }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex flex-col items-center">
                    <button className='flex items-center rounded-md bg-gray-100 w-full hover:bg-gray-200'>
                        <div className=' border-r text-4xl border-gray-300 py-2 px-6'><FcGoogle/></div>
                        <div className='font-medium flex justify-center w-full'><p>Sign in with Google</p></div>
                    </button>
                  </div>
                  <div className='my-4'>
                    <form className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg font-medium' htmlFor='email'>Email</label>
                            <input className='border border-gray-300 rounded-md py-2 px-3 focus:outline-zomato-btnpink/75 focus:ring-zomato-btnpink' type='text' id='email' name='email' placeholder='example@email.com'/>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-lg font-medium' htmlFor='password'>Password</label>
                            <input className='border border-gray-300 rounded-md py-2 px-3 focus:outline-zomato-btnpink/75 focus:ring-zomato-btnpink' type='password' id='password' placeholder='******'></input>
                        </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-zomato-btnpink px-4 py-2 text-md font-medium text-white w-full hover:bg-zomato-btnpink/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Sign In
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
