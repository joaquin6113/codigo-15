import { Card } from "../../components"
import { 
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
    ArrowRightIcon,
    PlusCircleIcon,
    PlusIcon,
    BookmarkIcon
} from "@heroicons/react/24/solid"
import clothesProducts from "../../assets/clothesProducts"
import homeProducts from "../../assets/homeProducts"
import kitchenProducts from "../../assets/kitchenProducts"
import othersProducts from "../../assets/othersProducts"

export default function ProductInfo({ title }) {
    return (
        <div className="flex-1 p-10">
            <Card>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl py-3 pb-6 pl-4 text-center">{title}:</h1>
                    <div className="flex justify-center items-center gap-3 mr-4 p-2 px-8 rounded-xl bg-blue-400 border-4 border-blue-900 cursor-pointer">
                        <PlusIcon className="w-7 text-9xl"/>
                        <p className="text-3xl">Publicar producto</p>
                    </div>
                </div>
                <hr className="border border-black mb-2 mx-5"/>
                <div className="flex items-center">
                    <div className="border-r-2 border-black w-[50%] flex items-center justify-between p-5">
                        <ArrowLeftCircleIcon width={75} className="cursor-pointer"/>
                        <img src={homeProducts.homeProduct1} alt="" className="border-4 border-brownBg rounded-2xl max-w-[500px] max-h-[500px]"/>
                        <ArrowRightCircleIcon width={75} className="cursor-pointer"/>
                    </div>
                    <div className="flex flex-1 justify-center items-center p-10">
                        <div className="flex flex-col gap-10">
                            <h2 className="text-center text-4xl">Colgador para 9 ganchos</h2>
                            <p className="text-center text-2xl">📌 Práctico colgador para 9 ganchos que te permitirá organizar tu closet 🥳</p>
                            <div className="flex flex-col mt-5 gap-5">
                                <p className="text-center text-2xl">💥💥  OFERTA  💥💥</p>
                                <div className="flex justify-center items-center gap-10">
                                    <p className="text-lg">Precio antes: S/. 5.00</p>
                                    <div className="flex">
                                        <ArrowRightIcon className="w-6 text-red-600"/>
                                        <ArrowRightIcon className="w-6 text-red-600"/>
                                    </div>
                                    <p className="text-lg">Precio con oferta: S/. 3.00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-20">
                                <PlusCircleIcon className="w-10 text-blue-500 cursor-pointer"/>
                                <BookmarkIcon className="w-10 text-green-500 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}