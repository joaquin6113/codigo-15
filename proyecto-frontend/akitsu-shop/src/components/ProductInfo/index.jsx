import { useState } from "react"

import { useParams, useNavigate } from "react-router-dom"
import { Button, Card, DialogContainer, Image, ImageSlider, ImagesModal, ProductData, ProductModal, SideArrows} from "../../components"

export default function ProductInfo({ title, products, index = products.length - 1, getProducts, cardClass, titleChanged, admin, user, indexId, setIndexId, setAddedToCart, currentId, setCurrentId, blueOrRed, setBlueOrRed }) {
    const navigate = useNavigate()
    const { id } = useParams()

    const isAdmin = user?.email === admin

    const [open2, setOpen2] = useState(false)

    const [indexIdRecent, setIndexIdRecent] = useState(0)
    
    const plusOneRecent = () => {
        setIndexIdRecent(indexIdRecent - 1)

        if (indexIdRecent === index - 5 && index - 5 >= 0) {
            setIndexIdRecent(index)
            return
        }
        if (indexIdRecent <= 0) setIndexIdRecent(index)
    }

    const minusOneRecent = () => {
        if (indexIdRecent === index) {
            index - 5 >= 0 ? setIndexIdRecent(index - 5) : setIndexIdRecent(0)
            return
        }

        setIndexIdRecent(indexIdRecent + 1)
    }

    const filter = () => {
        let number = 0
        if (titleChanged != number) {
            number = titleChanged
            const filter = products?.filter((cat) => cat.category === title).map((id) => id.id) 
            
            return filter
        }
    }

    const filteredProductsIds = filter()

    const plusOne = () => {
        setIndexId(indexId + 1)

        if (indexId === filteredProductsIds?.length - 1) setIndexId(0)
    }

    const minusOne = () => {
        setIndexId(indexId - 1)

        if (indexId === 0) setIndexId(filteredProductsIds?.length - 1)
    }

    const forIndexes = filteredProductsIds?.map((ids) => ids - 1)

    const giveIndex = () => {
        if (forIndexes === undefined) return 0
        return forIndexes[forIndexes.length - 1]
    }

    const [open, setOpen] = useState(false)

    const finish = () => {
        navigate("/")
    }

    return (
        <div className="flex flex-1 justify-center items-center m-10">
          <div className={cardClass}>
            <Card>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl py-3 pb-6 pl-4 text-center">{title}:</h1>
                    {isAdmin && !id && <button className="text-xl p-3 px-10 border-4 border-blue-800 bg-blue-400 rounded-xl" onClick={() => navigate(`/preview`)}>Ver galería</button>}
                    {isAdmin && !id && <ProductModal index={index} products={products} getProducts={getProducts} open={open} setOpen={setOpen}/>}
                    {products[index]?.url && id && <div onClick={finish} className="mr-5"><Button text="Publicar"/></div>}
                </div>
                <hr className="border border-black mb-2 mx-5"/>
                <div className="flex items-center">
                    <div className="w-[55%] flex items-center justify-between p-5">
                        <div className="flex flex-col items-center justify-center w-full py-12 px-6 gap-5 max-h-[600px]">
                        {products[index]?.url && !id && products[giveIndex()]?.category === title && 
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
                    {products[giveIndex()]?.category === title && <ProductData admin={admin} user={user} title={title} products={products} indexNormal={filteredProductsIds[indexId]} setCurrentId={setCurrentId} currentId={currentId} blueOrRed={blueOrRed} setBlueOrRed={setBlueOrRed}/>}
                    {title === "Productos más recientes" && <ProductData admin={admin} user={user} title={title} products={products} index={indexIdRecent} setAddedToCart={setAddedToCart} setCurrentId={setCurrentId} currentId={currentId} blueOrRed={blueOrRed} setBlueOrRed={setBlueOrRed}/>}
                    {id && <ProductData admin={admin} user={user} title={title} products={products} index={index} id={id}  open={open} setOpen={setOpen} getProducts={getProducts}/>}
                </div>
            </Card>
          </div>
        </div>
    )}