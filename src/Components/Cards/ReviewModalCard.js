import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import StarRatings from 'react-rating-stars-component';

export default function ReviewModalCard({isOpen,setIsOpen,...props}) {

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-zomato-btnpink font-medium leading-6 "
                  >
                    Write a Review for
                  </Dialog.Title>
                  <div className="mt-2 text-lg flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="review" id="dining"/>
                            <label htmlFor="dining">Dining</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" name="review" id="delivery"/>
                            <label htmlFor="delivery">Dining</label>
                        </div>
                  </div>

                    <div className="">
                        <StarRatings count={5} size={24}/>
                    </div>

                    <div>
                        <form className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-lg font-medium' htmlFor='subject'>Subject</label>
                                <input className='border border-gray-300 rounded-md py-1 px-2 focus:outline-zomato-btnpink/75 focus:ring-zomato-btnpink' type='text' id='subject' name='subject' placeholder='Add your subject here'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-lg font-medium' htmlFor='reviewText'>Review text</label>
                                <textarea rows={5}  className='border border-gray-300 rounded-md py-1 px-2 focus:outline-zomato-btnpink/75 focus:ring-zomato-btnpink' type='text' id='reviewText' placeholder='Add your text here'></textarea>
                            </div>
                        </form>
                    </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
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
};
