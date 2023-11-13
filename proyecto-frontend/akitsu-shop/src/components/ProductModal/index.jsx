import { useState } from "react"
import { PlusIcon } from "@heroicons/react/24/solid"
import { DialogContainer, ModalContent } from "../../components"

export default function ProductModal({ getProducts, index, products, open, setOpen }) {
    

    return (
        <>
          <div 
          className="flex justify-center items-center gap-3 mr-4 p-2 px-8 rounded-xl bg-blue-400 border-4 border-blue-900 cursor-pointer"
          onClick={() => setOpen(true)}>
              <PlusIcon className="w-7 text-9xl"/>
              <p className="text-3xl">Publicar producto</p>
          </div>
          <DialogContainer title="Publicar nuevo producto" openV={open} openF={setOpen}>
            <ModalContent index={index} products={products} onClose={() => setOpen(false)} getProducts={getProducts}/>
          </DialogContainer>
        </>
    )
}