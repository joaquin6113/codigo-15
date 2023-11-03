export default function OutsideLink({ text, url }) {
    return (
        <a 
        href={url} 
        target="_blank" 
        className="hover:text-blue-500 cursor-pointer text-xl capitalize">
            {text}
        </a>
    )
}