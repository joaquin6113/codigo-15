export default function SpanList({ entries, setTitle }) {
    const showProductType = (e) => setTitle(e.target.textContent)

    return (
        <>
        <div className="flex flex-col my-3 mb-3">
          {entries.map((entry) => (
            <span 
            key={entry} 
            className="text-lg cursor-pointer hover:text-blue-600"
            onClick={showProductType}
            >{entry}</span>
            ))}
        </div>
        </>
    )
}