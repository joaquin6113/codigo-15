import { useEffect, useState } from "react"
import { read } from "../../services"
import { ProductInfo, SideOptions } from "../../components"

export default function Home({ admin, user }) {
    const [title, setTitle] = useState("Productos más recientes")

    const [indexId, setIndexId] = useState(0)

    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState(products.length)

    const [titleChanged, setTitleChanged] = useState(0)
  
    const getProducts = async () => {
      const { data } = await read("products")
      setProducts(data)
      setAmount(products.length)
    }
  
    useEffect(() => {
      getProducts()
      }, [])

    
    const [currentId, setCurrentId] = useState([])
    const array = []
    for (let i = 1; i <= 50; i++) {
        array.push({i: i, show: true})
    }
    const [blueOrRed, setBlueOrRed] = useState(array)

    return (
        <>
          <div className="w-full flex bg-pinkBg">
            <SideOptions 
            setIndexId={setIndexId} 
            setTitle={setTitle} 
            getProducts={getProducts} 
            titleChanged={titleChanged} 
            setTitleChanged={setTitleChanged}
            currentId={currentId}
            products={products}
            />

            <ProductInfo 
            indexId={indexId} 
            setIndexId={setIndexId} 
            admin={admin} 
            user={user} 
            special={amount} 
            cardClass="flex-1 flex justify-center items-center max-w-[90%]" 
            title={title} 
            products={products} 
            getProducts={getProducts} 
            titleChanged={titleChanged}
            currentId={currentId}
            setCurrentId={setCurrentId}
            blueOrRed={blueOrRed}
            setBlueOrRed={setBlueOrRed}
            />
          </div>
        </>
    )
}