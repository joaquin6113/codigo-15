import { useState } from 'react'
import { Dialog, Switch } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function SignUp() {
    const [hasDiscount, setHasDiscount] = useState(false)

    function MyToggle() {
        const [enabled, setEnabled] = useState(false)
        
        return (
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        )
      }

      function MyDialog() {
        let [isOpen, setIsOpen] = useState(true)
      
        return (
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>
      
              <p>
                Are you sure you want to deactivate your account? All of your data
                will be permanently removed. This action cannot be undone.
              </p>
      
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
          </Dialog>
        )
      }
    
    return (
        <>
          {MyToggle()}
          <h1>un toggle</h1>
          {console.log(hasDiscount)}
          {MyDialog()}
        </>
    )
}