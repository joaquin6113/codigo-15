import logo from "../../assets/logo.svg"

export default function Logo() {
    return (
        <>
          <div className="h-[15vh] py-7 flex justify-center">
            <img src={logo} alt=""/>
        </div>
        </>
    )
}