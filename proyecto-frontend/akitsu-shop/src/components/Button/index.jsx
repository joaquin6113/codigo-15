export default function Button({ text, className }) {
    return (
        <>
          <button className={`text-xl p-3 px-10 border-4 border-blue-600 bg-blue-400 ${className} rounded-xl`}>{text}</button>
        </>
    )
}