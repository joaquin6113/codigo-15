import { useEffect, useState } from "react"
import { read } from "../../services"
import { ProductInfo, SideOptions } from "../../components"

export default function Home() {
    const [title, setTitle] = useState("Productos más recientes")

    const [products, setProducts] = useState([])
  
      // const userId = useSelector(selectorUserId)
  
    const getProducts = async () => {
      const response = await read("products")
      setProducts(response)
    }
  
    useEffect(() => {
      getProducts()
      }, [])

    return (
        <>
          <div className="w-full flex bg-pinkBg">
            <SideOptions setTitle={setTitle} getProducts={getProducts}/>
            <ProductInfo cardClass="w-[85%]" title={title} products={products} getProducts={getProducts}/>
          </div>
        </>
    )
}