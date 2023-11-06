import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { create } from "../../services"
import { Button, CategorySelect, OfferToggle, TextField } from "../../components"
import { inputs } from "./inputs"
import { ValuesAndFunctions } from "./values"
import { showCurrentId } from "../../utils"


export default function ModalContent({ onClose, getProducts, index, products }) {
    const { values, handleInputs } = ValuesAndFunctions()

    const navigate = useNavigate()

    const createInputs = () => inputs.map((i) => {
        return (
            <TextField key={i.name} value={values[i.name]} placeholder={i.placeholder} type={i.type} onChange={handleInputs[i.name]} className="rounded-lg" required/>
        )
    })
    const createdInput = createInputs()

    const [hasDiscount, setHasDiscount] = useState(false)

    const categories = ["Hogar", "Cocina", "Ropa", "Accesorios / Otros"]

    const [category, setCategory] = useState(categories[0])

    const handleSubmit = async (e) => {
        e.preventDefault()

        await create({
            name: createdInput[0].props.value,
            description: createdInput[1].props.value,
            currentPrice: createdInput[2].props.value,
            hasDiscount: hasDiscount,
            originalPrice: hasDiscount ? createdInput[3].props.value : "",
            category: category
        }, 
        "products"
        )

        onClose()

        const currentId = await showCurrentId(createdInput)

        await getProducts()

        navigate(`/preview/${currentId}`)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 place-content-center gap-5 my-5">
            <div>
                <h2 className="mb-[5px]">Título:</h2>
                <div className="text-lg">
                    {createdInput[0]}
                </div>
            </div>
                <div>
                <h2 className="mb-[5px]">Categoría:</h2>
                <div>
                    <CategorySelect onChange={setCategory} value={category} items={categories}/>
                </div>
            </div>
        </div>
        <div className="mb-5">
            <h2 className="mb-[5px]">Descripción:</h2>
            <div className="text-lg">
                {createdInput[1]}
            </div>
        </div>
        <div className="grid grid-cols-3 place-items-center mb-5">
            <div>
                <h2 className="mb-[5px]">Precio actual:</h2>
                {createdInput[2]}
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <h2>¿Hay oferta?</h2>
                <div className="flex items-center gap-5">
                    <span className="pb-1">No</span>
                    <OfferToggle setHasDiscount={setHasDiscount}/>
                    <span className="pb-1">Sí</span>
                </div>
            </div>
            {hasDiscount && 
            <div>
                <h2 className="mb-[5px]">Precio Anterior:</h2>
                {createdInput[3]}
            </div>
            }
        </div>
        <div className="flex justify-center items-center">
            <Button text=">> Siguiente paso >>"/>
        </div>
        </form>
    )
}