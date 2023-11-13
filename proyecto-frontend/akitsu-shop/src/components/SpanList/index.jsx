export default function SpanList({ entries, setTitle, setTitleChanged, titleChanged, indexId, setIndexId }) {
    const showProductType = (e) => {
        setTitle(e.target.textContent)
        setTitleChanged(titleChanged + 1)
        setIndexId(0)
    }

    return (
        <>
        <div className="flex flex-col my-3 mb-3">
          {entries?.map((entry, index) => (
            <span 
            key={index} 
            className="text-lg cursor-pointer hover:text-blue-600"
            onClick={showProductType}
            >{entry}</span>
            ))}
        </div>
        </>
    )
}