import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function DialogContainer({ title, openV, openF, children }) {
    return (
        <Dialog 
          open={openV}
          onClose={() => openF(false)}>
            <div className="fixed inset-0 bg-black/30">
              <div className="fixed inset-0 w-screen flex items-center justify-center">
                <Dialog.Panel className="bg-white mx-auto w-full md:max-w-2xl rounded-xl border-4 border-black p-8 text-2xl">
                <XMarkIcon onClick={() => openF(false)} className="bg-red-600 text-white rounded-full w-10 cursor-pointer float-right hover:scale-125 transition duration-300"/> 
                  <Dialog.Title className="flex justify-center text-4xl mt-10 mb-5">{title}</Dialog.Title>
                  {children}
                </Dialog.Panel>
              </div>
            </div>
         </Dialog>
    )
}