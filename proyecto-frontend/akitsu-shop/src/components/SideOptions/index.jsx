import { useState } from "react";
import { Card, DialogContainer, SpanList } from "../../components";

export default function SideOptions({ setTitle, setTitleChanged, titleChanged, setIndexId, currentId, setcurrentId, products }) {
    const separatedIds = currentId[0]?.split("")
    const entries = () => {
        if (separatedIds) return [products[separatedIds[0]]?.name, products[separatedIds[1]]?.name, products[separatedIds[2]]?.name]
    }

    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [currentSelect, setCurrentSelect] = useState(0)

    const onButtonClick = (e) => {
        const title = e.target.parentNode.parentNode.firstChild.firstChild.firstChild.textContent
        const selectedProduct = products.filter((product) => title === product.name)
        setCurrentSelect(selectedProduct[0].id - 1)
        setOpen4(true)
    } 

    const showNewModal = () => {
        return (
            <DialogContainer openV={open3} openF={setOpen3} title="Lista de compras">
                <div className="my-10 mx-5 overflow-y-auto h-[52vh] -mr-4 border-4 border-brownBg rounded">
                    <div className="flex-col py-5 border-r-4 border-brownBg px-2">
                        {separatedIds?.map((selected) => {
                            return (
                                <div key={products[selected].id}>
                                <div className="flex my-5 items-center gap-5 p-2 bg-red-400/40 border-4 border-brownBg rounded-xl mx-1">
                                    <img src={products[selected].url} alt="" width={100} className="border-2 border-brownBg rounded-lg"/>
                                    <div className="flex flex-1 items-center justify-between">
                                        <div className="flex-1 flex">
                                            <div>
                                                <p className="text-xl">{products[selected].name}</p>
                                                <p className="text-lg">S/. {products[selected].currentPrice}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="py-2 px-10 bg-blue-500 border-4 border-blue-800 rounded-xl" onClick={onButtonClick}>Ver</button>
                                        </div>
                                    </div>
                                </div>
                                <DialogContainer openV={open4} openF={setOpen4} title={products[currentSelect]?.name}>
                                    <div className="flex items-center gap-5">
                                        <img src={products[currentSelect]?.url} alt="" width={285} className="border-4 border-brownBg rounded-xl"/>
                                        <div className="flex flex-col items-center justify-center gap-5">
                                            <p className="text-xl pl-6">{products[currentSelect]?.description}</p>
                                            <p className="text-xl">S/. {products[currentSelect]?.currentPrice}</p>
                                            <div className="flex flex-col gap-1">
                                                <button className="p-2 px-6 bg-green-200 hover:bg-green-600 rounded-lg border-2 border-black" onClick={() => setOpen4(false)}>Aceptar</button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContainer>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </DialogContainer>
        )
    }
    
    return (
        <>
        {showNewModal()}
        <div className="border-r-4 border-brownBg w-[20%] pt-16 pb-20">
            <div className=" flex flex-col justify-center items-center px-10 gap-16">
                <Card>
                    <h3 className="text-3xl mb-5">Lista de compras</h3>
                    <div>
                        <SpanList setIndexId={setIndexId} setTitleChanged={setTitleChanged} titleChanged={titleChanged} entries={entries()}/>
                        {!currentId[0] && <p className="-mt-5 text-lg italic text-gray-700">Aún no has añadido ningún producto</p>}
                        {separatedIds && separatedIds[0] && <p className="-mt-1 text-xl cursor-pointer hover:text-blue-600 hover:scale-[105%] transition duration-200" onClick={() => setOpen3(true)}>Expandir...</p>}  {/**/}
                    </div>
                </Card>
                <Card>
                    <h3 className="text-3xl mb-5">Filtrar por:</h3>
                    <p className="text-2xl">Productos</p>
                    <SpanList setIndexId={setIndexId} setTitleChanged={setTitleChanged} titleChanged={titleChanged} setTitle={setTitle} entries={["Productos más recientes", "Hogar", "Cocina", "Ropa", "Accesorios / Otros"]}/>
                </Card>
            </div>
        </div>
        </>
    )
}