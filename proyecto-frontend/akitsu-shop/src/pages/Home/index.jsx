import { useState } from "react"
import { ProductInfo, SideOptions } from "../../components"

export default function Home() {
    const [title, setTitle] = useState("Productos más recientes")

    return (
        <>
          <div className="w-full flex bg-pinkBg my-10">
            <SideOptions setTitle={setTitle}/>
            <ProductInfo title={title}/>
          </div>
        </>
    )
}