import { OutsideLink } from "../../components"

export default function IconSocial({ img, text, url }) {
    return (
        <div className="flex gap-1 m-auto">
            <img src={img} width={30} alt="" />
            <OutsideLink text={text} url={url}/>
        </div>
    )
}