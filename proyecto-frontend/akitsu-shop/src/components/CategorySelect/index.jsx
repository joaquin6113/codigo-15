import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { ArrowSmallDownIcon, ArrowSmallUpIcon } from "@heroicons/react/24/solid"

export default function Select({ value, onChange, items }) {
    return (
        <Listbox value={value} onChange={onChange}>
            <div className="relative">
                <Listbox.Button 
                className="flex justify-between items-center border border-brownBg w-full px-2 py-[9.9px] outline-none rounded-lg">
                <span>{value}</span>
                <span>
                    <ArrowSmallDownIcon className="h-5 w-5"/>
                </span>
                </Listbox.Button>
                <Transition as={Fragment} 
                leave="transition ease-in duration-150" 
                leaveFrom="opacity-100" 
                leaveTo="opacity-0"
                >   
                <Listbox.Options className="w-full mt-1 rounded absolute z-10">
                    {items.map((item, index) => (
                    <Listbox.Option 
                    key={item} 
                    value={item}
                    className={`py-2 px-3 border border-brownBg hover:bg-[#ebddde] cursor-pointer
                                ${item === value 
                                ? "bg-pinkBg" 
                                : "bg-white"}
                                ${index === 0 
                                ? "rounded-t" : index === 3 
                                ? "rounded-b" : ""}
                              `}>
                        {item}
                    </Listbox.Option>
                    ))}
                </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}