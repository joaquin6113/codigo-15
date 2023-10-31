import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export default function SquareInfo({ info }) {
    const { id } = useParams()

    const title = useSelector((state) => 
        state.netflix.titles.find(
            (title) => title.jawSummary.id === Number(id)
        )
    )

    const values = {
        quality: title.jawSummary.delivery.quality,
        rating: title.jawSummary.maturity.rating.value,
        }

    return (
        <span className="border px-1 py-[2px] text-xs">{values[info]}</span>
    )
}