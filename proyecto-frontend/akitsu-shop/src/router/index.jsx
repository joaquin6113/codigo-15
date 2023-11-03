import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutUsPage, HomePage, SignUp } from "../pages"
import { NavLayout } from "../layouts"

export default function Router() {
    return (
        <BrowserRouter>
          <Routes>
            <Route element={<NavLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sobrenosotros" element={<AboutUsPage/>}/>
            </Route>
            <Route path="/testing" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
    )
}