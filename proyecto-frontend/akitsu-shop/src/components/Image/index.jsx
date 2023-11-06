export default function Image({ link = "", className, hSize, wSize, clicked, onClick, id }) {
    const bg = clicked ? "border-[3px]" : ""

    return (
      <img 
      src={link} 
      id={id}
      className={`${bg} max-w-[${wSize}] max-h-[${hSize}] ${className}`}
      alt="↓↓ Selecciona una imagen ↓↓"
      onClick={onClick}/>
    )
}