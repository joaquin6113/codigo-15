import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../services";
import { ProductInfo } from "../../components";

export default function ProductPreview() {
    const { id } = useParams()

    const [products, setProducts] = useState([])
  
      // const userId = useSelector(selectorUserId)
  
    const getProducts = async () => {
      const response = await read("products")
      setProducts(response)
    }
  
    useEffect(() => {
      getProducts()
      }, [])

    return(
        <>
          <ProductInfo 
          cardClass={"w-[60%] h-[70%] mt-10"}
          title="Vista previa del producto" 
          index={Number(id) - 1}
          products={products}
          getProducts={getProducts}
          id={products.length - 1}/>
        </>
    )
}