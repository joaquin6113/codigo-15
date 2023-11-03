import { useSelector } from "react-redux"
import { selectorUser } from "../../selectors/userSelector"
import { Navigate, Outlet } from "react-router-dom"


export default function AuthLayout() {
    const user = useSelector(selectorUser)

    if (user) return <Navigate to="/"/>

    return(
        <>
          <Outlet/>
        </>
    )
}