import { PlusCircleIcon, BookmarkIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

export default function ProductData({ products, index, title, id, indexNormal }) {
    return (
        <>
        {!id && title !== "Productos más recientes" && <div className="flex flex-1 justify-center items-center p-10 border-l-2 border-black ">
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
            <div className="flex justify-between items-center mt-20">
                <PlusCircleIcon className="w-10 text-blue-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
                <BookmarkIcon className="w-10 text-green-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
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
                    {products[indexNormal]?.hasDiscount && 
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
            <div className="flex justify-between items-center mt-20">
                <PlusCircleIcon className="w-10 text-blue-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
                <BookmarkIcon className="w-10 text-green-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
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
                <div className="flex justify-between items-center mt-20">
                    <PlusCircleIcon className="w-10 text-blue-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
                    <BookmarkIcon className="w-10 text-green-500 cursor-pointer hover:scale-[150%] transition duration-300"/>
                </div>
            </div>
        </div>}
    </>
    )
}