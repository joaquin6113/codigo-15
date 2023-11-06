import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function OfferToggle({ setHasDiscount }) {
    const [enabled, setEnabled] = useState(false)

    const onToggle = () => {
        setEnabled(!enabled ? true : false);

        setHasDiscount(!enabled);
    }

    return (
        <>
          <Switch
            checked={enabled}
            onChange={onToggle}
            className={`${
              enabled ? 'bg-green-600' : 'bg-red-600'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </>
    )
}