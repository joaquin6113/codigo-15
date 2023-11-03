export default function TextField({ 
    value, 
    onChange, 
    placeholder = "Nombre de la tarea", 
    className, 
    type = "text",
    name,
}) {
    return (
        <input 
              type={type} 
              value={value}
              onChange={onChange}
              name={name}
              className={`border w-full px-2 py-3 outline-none ${className}`}
              placeholder={placeholder}
              />
    )
}