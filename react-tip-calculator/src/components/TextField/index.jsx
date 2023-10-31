import { useRef } from "react"
import dollarIcon from "../../assets/icon-dollar.svg"
import personIcon from "../../assets/icon-person.svg"

export default function Input({ icon, name, placeholder, value, onChange }) {
  const inputRef = useRef(null)

  const icons = {
    dollar: dollarIcon,
    person: personIcon,
  }

  const handleInputRef = () => inputRef.current.focus()

  return (
    <>
      <div 
      onClick={handleInputRef}
      className="flex items-center p-2 rounded-md bg-green-100/50 cursor-text">
        <img src={icons[icon]} alt=""/>
        <input
        ref={inputRef}
        id="input-bill" 
        type="number"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"/>
      </div>
    </>
  )
}