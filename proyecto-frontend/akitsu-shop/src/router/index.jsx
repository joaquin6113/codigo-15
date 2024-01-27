import { useSelector } from "react-redux"
import { adminUser, selectorUser } from "../selectors/productSelectors"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutUsPage, HomePage, Preview, ProductPreviewPage, SignInPage, SignUpPage } from "../pages"
import { NavLayout, AdminLayout } from "../layouts"

export default function Router() {
  const admin = useSelector(adminUser)
  const user = useSelector(selectorUser)

    return (
        <BrowserRouter>
          <Routes>
            <Route element={<NavLayout admin={admin} user={user}/>}>
                <Route path="/" element={<HomePage admin={admin} user={user}/>}/>
                <Route path="/cat/:cat" element={<HomePage admin={admin} user={user}/>}/>
                <Route path="/sobrenosotros" element={<AboutUsPage/>}/>
            </Route>
            <Route element={<AdminLayout admin={admin} user={user}/>}>
              <Route path="/preview" element={<Preview/>}></Route>
              <Route path="/preview/:id" element={<ProductPreviewPage/>}/>
            </Route>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}