import { Card, SpanList } from "../../components";

export default function SideOptions({ setTitle, setTitleChanged, titleChanged }) {
    return (
        <div className="border-r-4 border-brownBg w-[20%] flex flex-col justify-center items-center px-10 gap-16">
            <Card>
                <h3 className="text-3xl mb-5">Lista de compras</h3>
                <div>
                    <SpanList setTitleChanged={setTitleChanged} titleChanged={titleChanged} entries={["item 1", "item 2", "item 3"]}/>
                    <p className="-mt-1 text-lg cursor-pointer hover:text-blue-600">Ver más...</p>
                </div>
            </Card>
            <Card>
                <h3 className="text-3xl mb-5">Filtrar por:</h3>
                    <p className="text-2xl">Productos</p>
                    <SpanList setTitleChanged={setTitleChanged} titleChanged={titleChanged} setTitle={setTitle} entries={["Productos más recientes", "Hogar", "Cocina", "Ropa", "Accesorios / Otros"]}/>
                    <p className="text-2xl">Precios</p>
                    <SpanList setTitleChanged={setTitleChanged} titleChanged={titleChanged} entries={["Menor a mayor", "Mayor a menor"]}/>
            </Card>
        </div>
    )
}