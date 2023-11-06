export default function TextField({ 
    value, 
    onChange, 
    placeholder, 
    className, 
    type,
    name,
}) {
    return (
        <input 
              type={type} 
              value={value}
              onChange={onChange}
              name={name}
              className={`border border-brownBg w-full px-2 py-3 outline-none ${className}`}
              placeholder={placeholder}/>
    )
}