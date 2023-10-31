export default function ItemPercentage({ per, isActive, onClick }) {
  const bg = isActive ? "bg-green-200" : "bg-primary"

    return (
        <div 
        onClick={() => onClick(per)}
        className={`${bg} cursor-pointer text-white font-semibold text-xl rounded-md p-2 text-center`}>
          <span>{per}</span>
        </div>
    )
}