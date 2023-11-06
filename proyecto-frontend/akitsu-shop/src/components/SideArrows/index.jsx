import{ ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"

export default function Image({ children, onClickLeft, onClickRigth }) {
    return (
        <>
          <div className="flex flex-1 justify-between">
            <ArrowLeftCircleIcon width={75} className="cursor-pointer hover:scale-110 transition duration-300" onClick={onClickLeft}/>
            {children}
            <ArrowRightCircleIcon width={75} className="cursor-pointer hover:scale-110 transition duration-300" onClick={onClickRigth}/>
          </div>
        </>
    )
}