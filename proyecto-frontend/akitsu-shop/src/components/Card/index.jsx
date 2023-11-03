export default function Card({ children }) {
    return (
        <div className={`bg-white border-4 border-brownBg w-full rounded-xl py-5 px-8`}>
            {children}
        </div>
    )
}