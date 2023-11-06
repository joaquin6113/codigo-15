import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Card, DialogContainer, Image, ImageSlider, ImagesModal, ProductData, ProductModal, SideArrows } from "../../components"

export default function ProductInfo({ title, products, index = products.length - 1, getProducts, cardClass }) {
    const navigate = useNavigate()
    const { id } = useParams()

    const [open2, setOpen2] = useState(false)

    const [indexId, setIndexId] = useState(0)
    const [indexIdRecent, setIndexIdRecent] = useState(index)

    const filteredProductsIds = products?.filter((cat) => cat.category === title).map((id) => id.id)

    const plusOne = () => {
        setIndexId(indexId + 1)

        if (indexId === filteredProductsIds.length - 1) setIndexId(0)
    }

    const minusOne = () => {
        setIndexId(indexId - 1)

        if (indexId === 0) setIndexId(filteredProductsIds.length - 1)
    }

    const plusOneRecent = () => {
        setIndexIdRecent(indexIdRecent - 1)

        if (indexId === 0 || indexId === index - 6) setIndexIdRecent(index)
    }

    const minusOneRecent = () => {
        if (indexId === index || index - 6 < 0) {
            setIndexIdRecent(0)
            return
        }

        if (indexId === index || index - 6 >= 0) {
            setIndexId(index - 6)
            return
        }
        setIndexIdRecent(indexIdRecent + 1)
    }

    const finish = () => {
        navigate("/")
    }

    return (
        <div className="flex justify-center items-center flex-1 m-10">
            <Card className={cardClass}>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl py-3 pb-6 pl-4 text-center">{title}:</h1>
                    {!id && <ProductModal index={index} products={products} getProducts={getProducts}/>}
                    {products[index]?.url && id && <div onClick={finish} className="mr-5"><Button text="Publicar"/></div>}
                </div>
                <hr className="border border-black mb-2 mx-5"/>
                <div className="flex items-center">
                    <div className="w-[55%] flex items-center justify-between p-5">
                        <div className="flex flex-col items-center justify-center w-full py-12 px-6 gap-5 max-h-[600px]">
                        {products[index]?.url && !id && products[index]?.category === title && 
                            <SideArrows onClickRigth={plusOne} onClickLeft={minusOne}>
                                <ImageSlider key={id} id={filteredProductsIds[indexId]} products={products}/>
                            </SideArrows>}
                        {products[index]?.url && !id && title === "Productos más recientes" && 
                            <SideArrows onClickRigth={plusOneRecent} onClickLeft={minusOneRecent}>
                               <ImageSlider idRecent={indexIdRecent} products={products}/>
                            </SideArrows>}
                            {products[index]?.url && id && <Image link={products[index]?.url} className="border-4 border-brownBg rounded-2xl" wSize="500px" hSize="500px"/>}
                            <div onClick={() => setOpen2(true)}>
                              {id && <Button text="Seleccionar imagen"/>}
                            </div>
                        </div>
                        <DialogContainer title="Seleccione la imagen del producto" openV={open2} openF={setOpen2}>
                            <ImagesModal setOpen2={setOpen2} getProducts={getProducts}/>
                        </DialogContainer>

                    </div>
                    {products[index]?.category === title && <ProductData title={title} products={products} index={indexId}/>}
                    {title === "Productos más recientes" && <ProductData title={title} products={products} index={indexIdRecent}/>}
                    {id && <ProductData title={title} products={products} index={index} id={id}/>}
                </div>
            </Card>
        </div>
    )}