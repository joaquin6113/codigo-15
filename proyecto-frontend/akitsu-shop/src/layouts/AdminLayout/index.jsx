import { Navigate, Outlet } from "react-router-dom"

export default function AuthLayout({ admin, user }) {
    if (user.email !== admin) return <Navigate to="/"/>

    return (
        <>
          <Outlet/>
        </>
    )
}