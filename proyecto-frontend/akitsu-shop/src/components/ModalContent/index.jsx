import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { create, update } from "../../services"
import { Button, CategorySelect, OfferToggle, TextField } from "../../components"
import { inputs } from "./inputs"
import { ValuesAndFunctions } from "./values"
import { showCurrentId } from "../../utils"


export default function ModalContent({ onClose, getProducts, id, products, setOpen, product }) {
    const { values, handleInputs } = ValuesAndFunctions(products, id, product)

    const navigate = useNavigate()

    const createInputs = () => inputs.map((i) => {
            return (
                <TextField key={i.name} value={values[i.name]} placeholder={i.placeholder} type={i.type} onChange={handleInputs[i.name]} className="rounded-lg" required/>
            )})

    const modificatedInputs = () => {return (
            [
            <TextField value={values?.title2} placeholder="Escribe un título" type="text" onChange={handleInputs?.title2} className="rounded-lg" required/>, 
            <TextField value={values?.description2} placeholder="Escribe una descripción" type="text" onChange={handleInputs?.description2} className="rounded-lg" required/>, 
            <TextField value={values?.currentprice2} placeholder="Precio actual" type="number" onChange={handleInputs?.currentprice2} className="rounded-lg" required/>, 
            <TextField value={values?.previousprice2} placeholder="Precio anterior" type="number" onChange={handleInputs?.previousprice2} className="rounded-lg" required/>, 
        ]
        )}
    
    const specialInputs = modificatedInputs()

    const createdInput = createInputs()

    const [hasDiscount, setHasDiscount] = useState(product[0]?.hasDiscount)

    const categories = ["Hogar", "Cocina", "Ropa", "Accesorios / Otros"]

    const [category, setCategory] = useState(categories[0])

    const object = {
        name: createdInput[0].props.value,
        description: createdInput[1].props.value,
        current_price: Number(createdInput[2].props.value),
        has_discount: hasDiscount,
        original_price: hasDiscount ? Number(createdInput[3].props.value) : null,
        category: category
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!hasDiscount) {
            delete object.original_price
        }

        if (!id) {
            await create(object, 
            "products"
            )
        }

        if (id) {
            await update(
                id,
                object,
                "products",
            )
        }

        if (!id) onClose()
        if (id) setOpen(false)

        const currentId = await showCurrentId(createdInput)

        await getProducts()

        if (!id) navigate(`/preview/${currentId}`)
        if (id) navigate(`/preview`)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 place-content-center gap-5 my-5">
            <div>
                <h2 className="mb-[5px]">Título:</h2>
                <div className="text-lg">
                 {!id && createdInput[0]} {id && specialInputs[0]}
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
                 {!id && createdInput[1]} {id && specialInputs[1]}
            </div>
        </div>
        <div className="grid grid-cols-3 place-items-center mb-5">
            <div>
                <h2 className="mb-[5px]">Precio actual:</h2>
                 {!id && createdInput[2]} {id && specialInputs[2]}
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
                 {!id && createdInput[3]} {id && specialInputs[3]}
            </div>
            }
        </div>
        <div className="flex justify-center items-center">
            {!id && <Button text=">> Siguiente paso >>"/>}
            {id && <Button text="Actualizar"/>}
        </div>
        </form>
    )
}