export default function Image({ link = "", className, clicked, onClick, id, wSize, hSize }) {
    const bg = clicked ? "border-[3px]" : ""

    return (
      <img 
      src={link} 
      id={id}
      className={`${bg} ${wSize} ${hSize} ${className}`}
      alt="↓↓ Selecciona una imagen ↓↓"
      onClick={onClick}/>
    )
}