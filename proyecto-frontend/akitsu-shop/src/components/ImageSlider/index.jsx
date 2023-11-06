export default function ImageSlider({ products, id, idRecent }) {
  const finalId = () => !id ? idRecent : Number(id) - 1

    return (
        <>
          <img key={idRecent} src={products[finalId()]?.url} className="border-4 border-brownBg rounded-2xl max-w-[400-px] max-h-[400px] overflow-x-hidden flex"/>
        </>
    )
}

// "Slider"