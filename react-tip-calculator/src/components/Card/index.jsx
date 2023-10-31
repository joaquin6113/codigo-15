export default function Card( { children } ) {
    return (
        <div className="h-[85vh] bg-white rounded-t-3xl py-5 px-10">
            {children}
        </div>
    )
}