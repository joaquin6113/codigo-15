export default function Image({ title }) {
    return (
        <>
          <div>
            <img 
              className="rounded hover:scale-[120%] md:hover:scale-150 transition duration-500 cursor-pointer object-cover"
              src={title.jawSummary.backgroundImage.url}
            />
          </div>
        </>
    )
}