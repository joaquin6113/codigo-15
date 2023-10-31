import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Details } from "../pages"
import { Layout } from "../components"

export default function Router() {
    return (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/details/:id" element={<Details/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    )
}