import { Image } from "../../components"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Home() {
  const titles = useSelector((state) => state.netflix.titles)

  return (
    <>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {titles.length > 0 && titles.map((title) => (
                <Link key={title.jawSummary.id} to={`/details/${title.jawSummary.id}`}>
                  <Image title={title}/>
                </Link>
              ))}
          </div>
    </>
  )
}