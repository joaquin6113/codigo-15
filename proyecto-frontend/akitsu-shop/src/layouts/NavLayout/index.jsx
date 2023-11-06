import { Outlet, Link, Navigate } from "react-router-dom"
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/solid"
import akitsuLogo from "../../assets/akitsu-shop-4-3.jpg"


export default function NavLayout({ admin, user }) {
    return (
        <>
          <nav className="bg-white border-b-4 border-brownBg w-full px-10 py-2 flex gap-16 items-center justify-end">
            <div className="flex items-center justify-center gap-16 flex-1">
                <Link to="/">
                  <HomeIcon className="w-9 cursor-pointer"/>
                </Link>
                <img src={akitsuLogo} alt="" width="85px" className="rounded-md border-2 border-brownBg"/>
                <div className="flex gap-10 text-xl">
                    <p>Lista de deseos</p>
                    <p>Deja tu reseña</p>
                    <Link to="/sobrenosotros">
                      <p>Acerca de la tienda</p>
                    </Link>
                </div>
                <ShoppingCartIcon className="w-9 cursor-pointer"/>
            </div>
          </nav>
          <Outlet/>
        </>
    )
}