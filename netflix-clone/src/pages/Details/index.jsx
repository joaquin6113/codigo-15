import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { DetailListDescription, SquareInfo } from "../../components"

export default function Details() {
    const { id } = useParams()

    const title = useSelector((state) => 
        state.netflix.titles.find(
            (title) => title.jawSummary.id === Number(id)
        )
    )

    return (
        <>
          <div className="max-w-3xl m-auto">
            <div>
                <img src={title.jawSummary.backgroundImage.url}/>
            </div>
            <div className="my-3 flex gap-4 justify-between items-start">
                <div className="flex-1">
                    <div className="flex gap-2">
                        <span>{title.jawSummary.releaseYear}</span>
                        <span>{title.jawSummary.numSeasonsLabel}</span>
                        <SquareInfo info={"quality"}/>
                    </div>
                    <p className="mt-2 text-sm">
                        <SquareInfo info={"rating"}/>
                        &nbsp; &nbsp; &nbsp;
                        <span className="capitalize">{title.jawSummary.maturity.rating.specificRatingReason}</span>
                    </p>
                    <h2 className="font-semibold text-2xl my-4">{title.jawSummary.title}</h2>
                    <p className="text-sm">{title.jawSummary.synopsis}</p>
                </div>
                <div className="flex flex-col gap-4 w-[30%]">
                    <DetailListDescription 
                    list={title.jawSummary.cast} 
                    title={"Cast"}/>
                    <DetailListDescription 
                    list={title.jawSummary.genres} 
                    title={"Genres"}/>
                    <DetailListDescription 
                    list={title.jawSummary.tags} 
                    title={"This title is"}/>
                </div>
            </div>
          </div>
        </>
    )
}