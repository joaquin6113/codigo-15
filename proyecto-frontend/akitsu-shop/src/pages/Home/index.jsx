import { useEffect, useState } from "react"
import { read } from "../../services"
import { ProductInfo, SideOptions } from "../../components"

export default function Home({ admin, user }) {
    const [title, setTitle] = useState("Productos más recientes")

    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState(products.length)

    const [titleChanged, setTitleChanged] = useState(0)
  
    const getProducts = async () => {
      const response = await read("products")
      setProducts(response)
      setAmount(products.length)
    }
  
    useEffect(() => {
      getProducts()
      }, [])

    return (
        <>
          <div className="w-full flex bg-pinkBg">
            <SideOptions setTitle={setTitle} getProducts={getProducts} titleChanged={titleChanged} setTitleChanged={setTitleChanged}/>
            <ProductInfo admin={admin} user={user} special={amount} cardClass="flex-1 flex justify-center items-center max-w-[90%]" title={title} products={products} getProducts={getProducts} titleChanged={titleChanged}/>
          </div>
        </>
    )
}