import { useState } from "react"
import { useParams } from "react-router-dom"
import { update } from "../../services"
import Swal from "sweetalert2"
import { Image, Button } from "../../components"
import { imageGallery } from "../../assets/imageGallery"



export default function ImagesModal({ getProducts, setOpen2 }) {
  const { id } = useParams()

  const [url, setUrl] = useState("")

  const box = []

  for (let i = 0; i <= imageGallery.length - 1; i++) {
    box.push({
      number: i,
      clicked: false,
      image: imageGallery[i],
    }) 
  }

  const [imgData, setImgData] = useState(box)
  
  const handleMapBorder = (value) => {
    return imgData.map((img) => {
      return {
        number: img.number,
        clicked: !img.clicked && Number(value) == Number(img.number),
        image: img.image
      }
    })
  }

  const onImageClick = (e) => {
    setUrl(e.target.src)
    setImgData(handleMapBorder(e.target.id))
  }

  const showImage = (productLinks) => productLinks.map(
    (group) => <Image 
                link={group.image}
                key={group.number}
                id={group.number}
                wSize="max-w-[125px]"
                hSize="max-h-[125px]"
                className="hover:border-[3px] hover:scale-110 border-black transiton duration-300 rounded-lg"
                clicked={group.clicked}
                onClick={onImageClick}/>)

  const selectImage = async () => {
    await update(
      id,
      {url: url}, 
      "products")
      
      setOpen2(false)

      Swal.fire({
        title:"Success",
        icon: "success",
        text: "Imagen actualizada correctamente",
      })

      await getProducts()
  }
 
    return (
      <>
        <p className="flex justify-center mb-2 text-2xl" key="hii">===== Galería de imágenes =====</p>
        <div className="grid grid-cols-4 gap-5 place-items-center h-[450px] p-5 overflow-auto border-4 border-black rounded-xl bg-pinkBg/20" key="hola">
          {showImage(imgData)}
        </div>
        {imgData.map((img) => img.clicked && <div key="bottomImageAndButton" className="flex justify-center items-center gap-10 mt-5">
          <div className="flex justify-center items-center gap-10">
            <img src={url} className="max-w-[120px] max-h-[120px] border-4 border-black rounded-lg"/>
            <div key="wiwi" onClick={selectImage}>
            <Button text="Aceptar"/>
            </div>
          </div>
        </div>) 
        }
      </>
    )
}