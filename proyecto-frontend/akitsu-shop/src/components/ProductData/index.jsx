import { useState } from "react"
import { PlusCircleIcon, ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Swal from "sweetalert2"
import { DialogContainer, ModalContent } from "../../components"

export default function ProductData({ products, index, title, id, indexNormal, setCurrentId, currentId, blueOrRed, setBlueOrRed, setOpen, getProducts }) {
    const [open5, setOpen5] = useState(false)

    const valueIfTrue = (value) => {
        return blueOrRed.map((number) => {
            const isActive = () => {
                if (number.show === false) return false
                if (number.show === true && value + 1 == number.i) return false
                return true
            }
            return {
                i: number.i,
                show: isActive()
            }
        })
    }

    const valueIfFalse = (value) => {
        return blueOrRed.map((number) => {
            const isInactive = () => {
                if (number.show === false && value + 1 != number.i) return false
                if (number.show === false && value + 1 == number.i) return true
                return true
            }
             return {
                i: number.i,
                show: isInactive() 
            }
        })
    }
    
    const skeletonAddId = (value) => {
        const separate = (currentId += value).split(",")
        setCurrentId(separate)
        setBlueOrRed(valueIfTrue(value))
        Swal.fire({
            title:"Añadido a la lista de compras",
            icon: "success",
          })
    }

    const skeletonDeleteId = (value) => {
        if (currentId[0] !== undefined) {
            setCurrentId([currentId[0]
            .split("")
            .filter((letter) => letter != value)
            .join("")])
        }
        setBlueOrRed(valueIfFalse(value))
        Swal.fire({
            title:"Eliminado de la lista de compras",
            icon: "success",
          })
    }

    const addId = () => skeletonAddId(index)
    const deleteId = () => skeletonDeleteId(index)

    const addId2 = () => skeletonAddId(indexNormal - 1)
    const deleteId2 = () => skeletonDeleteId(indexNormal - 1)
    return (
        <>
        {!id && title !== "Productos más recientes" && <div className="flex flex-1 justify-center items-center p-10 border-l-2 border-black">
        <div className="flex flex-col gap-10">
            <div key="titleAndDesk" className="flex flex-col gap-10">
                <h2 className="text-center text-4xl"> {products[indexNormal - 1]?.name} </h2>
                <p className="text-center text-2xl"> {products[indexNormal - 1]?.description} </p>
            </div>
                <div className="flex flex-col mt-5 gap-5">  
                    {products[indexNormal - 1]?.hasDiscount && 
                    <p className="text-center text-2xl">💥💥  OFERTA  💥💥</p>}
                    <div className="flex justify-center items-center gap-10">
                        <div className="flex flex-col items-center">
                            <p className="text-lg">Precio{products[indexNormal - 1]?.originalPrice ? " antes" : ""}:</p>
                            <p className="text-3xl">S/. {products[indexNormal - 1]?.currentPrice}</p>
                        </div>
                        {products[indexNormal - 1]?.originalPrice && 
                        <>
                            <div className="flex">
                                <ArrowRightIcon className="w-6 text-red-600"/>
                                <ArrowRightIcon className="w-6 text-red-600"/>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-lg">Precio con oferta:</p>
                                <p className="text-3xl">S/. {products[indexNormal - 1]?.originalPrice}</p>
                            </div>
                        </>
                        }    
                    </div>
                </div>
            <div className="flex justify-center items-center mt-20">
            {blueOrRed[indexNormal - 1].show &&
                <div onClick={addId2}>
                    <div className="flex flex-col items-center">
                        <PlusCircleIcon className="w-10 text-blue-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
                        <p className="text-sm pt-2">(Añadir a la lista de compras)</p>
                    </div>
                </div>}
                {blueOrRed[indexNormal - 1].show === false &&
                <div onClick={deleteId2}>
                    <div className="flex flex-col items-center">
                        <XMarkIcon className="w-10 bg-red-500 cursor-pointer hover:scale-[150%] transition duration-300 rounded-full text-white"/>
                        <p className="text-sm pt-2">(Eliminar de la lista de compras)</p>
                    </div>
                </div>}
            </div>
        </div>
    </div>}

    {!id && title === "Productos más recientes" && <div className="flex flex-1 justify-center items-center p-10 border-l-2 border-black ">
        <div className="flex flex-col gap-10">
            <div key="titleAndDesk" className="flex flex-col gap-10">
                <h2 className="text-center text-4xl"> {products[index]?.name} </h2>
                <p className="text-center text-2xl"> {products[index]?.description} </p>
            </div>
                <div className="flex flex-col mt-5 gap-5">
                    {products[index]?.hasDiscount && 
                    <p className="text-center text-2xl">💥💥  OFERTA  💥💥</p>}
                    <div className="flex justify-center items-center gap-10">
                        <div className="flex flex-col items-center">
                            <p className="text-lg">Precio{products[index]?.originalPrice ? " antes" : ""}:</p>
                            <p className="text-3xl">S/. {products[index]?.currentPrice}</p>
                        </div>
                        {products[index]?.originalPrice && 
                        <>
                            <div className="flex">
                                <ArrowRightIcon className="w-6 text-red-600"/>
                                <ArrowRightIcon className="w-6 text-red-600"/>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-lg">Precio con oferta:</p>
                                <p className="text-3xl">S/. {products[index]?.originalPrice}</p>
                            </div>
                        </>
                        }    
                    </div>
                </div>
            <div className="flex justify-center items-center mt-20">
                {blueOrRed[index].show &&
                <div onClick={addId}>
                    <div className="flex flex-col items-center">
                        <PlusCircleIcon className="w-10 text-blue-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
                        <p className="text-sm pt-2">(Añadir a la lista de compras)</p>
                    </div>
                </div>}
                {blueOrRed[index].show === false &&
                <div onClick={deleteId}>
                    <div className="flex flex-col items-center">
                        <XMarkIcon className="w-10 bg-red-500 cursor-pointer hover:scale-[150%] transition duration-300 rounded-full text-white"/>
                        <p className="text-sm pt-2">(Eliminar de la lista de compras)</p>
                    </div>
                </div>}
            </div>
        </div>
    </div>}

    {id && 
    <div className="flex flex-1 justify-center items-center p-10 border-l-2 border-black ">
            <div className="flex flex-col gap-10">
                <div key="titleAndDesk" className="flex flex-col gap-10">
                    <h2 className="text-center text-4xl"> {products[Number(id) - 1]?.name} </h2>
                    <p className="text-center text-2xl"> {products[Number(id) - 1]?.description} </p>
                </div>
                    <div className="flex flex-col mt-5 gap-5">
                        {products[Number(id) - 1]?.originalPrice && 
                        <p className="text-center text-2xl">💥💥  OFERTA  💥💥</p>}
                        <div className="flex justify-center items-center gap-10">
                            <div className="flex flex-col items-center">
                                <p className="text-lg">Precio{products[Number(id) - 1]?.originalPrice ? " antes" : ""}:</p>
                                <p className="text-3xl">S/. {products[Number(id) - 1]?.currentPrice}</p>
                            </div>
                            {products[Number(id) - 1]?.originalPrice && 
                            <>
                                <div className="flex">
                                    <ArrowRightIcon className="w-6 text-red-600"/>
                                    <ArrowRightIcon className="w-6 text-red-600"/>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-lg">Precio con oferta:</p>
                                    <p className="text-3xl">S/. {products[Number(id) - 1]?.originalPrice}</p>
                                </div>
                            </>
                            }    
                        </div>
                    </div>
                <div className="flex justify-center items-center mt-20">
                    <button className="text-xl p-3 px-10 border-4 border-blue-600 bg-blue-400 rounded-xl" onClick={() => setOpen5(true)}>Editar contenido</button>
                    <DialogContainer openV={open5} openF={setOpen5} title="Editar">
                        <ModalContent id={id} products={products} open={open} setOpen={setOpen} getProducts={getProducts}/>
                    </DialogContainer>
                </div>
            </div>
        </div>}
    </>
    )
}