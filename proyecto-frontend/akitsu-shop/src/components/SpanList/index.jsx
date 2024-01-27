import { Link, useParams } from "react-router-dom"

export default function SpanList({ entries, setTitle, setTitleChanged, titleChanged, indexId, setIndexId }) {
    const { cat } = useParams()

    const showProductType = (e) => {
        if (cat === "Accessorios") {
            setTitle("Accesorios / otros")
        }
        if (cat) {
            setTitle(cat)
        }
        else {
            setTitle("Productos más recientes")
        }
    }

    const exactCategories = (entry) => {
        const new_entry = entry?.split(" ")[0]
        if (new_entry === "Productos") {
            return "/"
        } else {
            return `/cat/${new_entry}`
        }
    }

    return (
        <>
        <div className="flex flex-col my-3 mb-3">
          {entries?.map((entry, index) => (
            <Link 
            key={index} 
            className="text-lg cursor-pointer hover:text-blue-600"
            to={exactCategories(entry)}
            onClick={[showProductType, () => window.location.reload()]}
            >{entry}</Link>
            ))}
        </div>
        </>
    )
}