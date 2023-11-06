import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { read } from "../../services";
import { Card, Image } from "../../components";


export default function Preview() {
    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await read("products")
        setProducts(response)
      }

    useEffect(() => {
        getProducts()
        }, [])

    const onImageClick = (p) => navigate(`/preview/${p.id}`)

    return (
        <>
          <div className="w-full flex bg-pinkBg justify-center items-center">
            <div className="flex-1 max-w-[60%] max-h-[80%] my-24">
                <Card>
                    <h1 className="text-center text-5xl mb-8 mt-4">Seleccione para ver vista previa</h1>
                    <div className="grid grid-cols-4 gap-5">
                        {products?.map((product) => {
                            return (
                                <Image 
                                key={product.id} 
                                link={product.url} 
                                wSize="max-w-[220px]" 
                                hSize="max-h-[220px]" 
                                className="rounded-lg border-4 border-black hover:scale-110 transition duration-300"
                                onClick={onImageClick(product)}/>
                            )
                        })}
                    </div>
                </Card>
            </div>
          </div>
        </>
    )
}