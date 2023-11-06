import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutUsPage, HomePage, ProductPreviewPage, SignInPage, SignUpPage } from "../pages"
import { NavLayout } from "../layouts"

export default function Router() {
    return (
        <BrowserRouter>
          <Routes>
            <Route element={<NavLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sobrenosotros" element={<AboutUsPage/>}/>
            </Route>
            <Route path="/preview">
              <Route path="/preview/:id" element={<ProductPreviewPage/>}/>
            </Route>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}