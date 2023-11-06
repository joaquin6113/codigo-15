import { Card, IconSocial } from "../../components";
import logo from "../../assets/akitsu-shop-logo.jpg"
import socialsIcons from "../../assets/socialsIcons";


export default function AboutUs() {
    return (
        <>
          <div className="flex justify-center items-center">
            <div className="w-[50%] my-20">
              <Card>
                <div className="flex justify-between items-center gap-10">
                    <div>
                      <img src={logo} width={500} className="border-4 border-blueBg rounded-xl" alt="" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-center text-4xl mb-3">Akitsu Shop</h1>
                      <p className="text-xl">Belleza, cosmética y cuidado personal</p>
                      <p className="text-xl mt-5">Venta de artículos para el hogar, prendas de vestir para dama y mucho más 😊</p>
                      <div className="mt-5">
                        <h2 className="text-2xl">Horarios:</h2>
                        <p className="text-xl">Lunes a sábado:  9:00 - 21:00</p>
                        <p className="text-xl">Domingos: 10:00 - 20:00</p>
                        <p className="text-xl">Pueblo Libre, Perú</p>
                      </div>
                      <div className="flex flex-col text-lg mt-5 gap-1">
                        <IconSocial img={socialsIcons[0]} text="instagram" url="https://www.instagram.com/akitsu.shop/"/>
                        <IconSocial img={socialsIcons[1]} text="facebook" url="https://www.facebook.com/akitsu.shop/"/>
                        <IconSocial img={socialsIcons[2]} text="tiktok" url="https://www.tiktok.com/@akitsu.shop"/>
                        <IconSocial img={socialsIcons[3]} text="whatsapp" url="https://wa.me/c/51999680749"/>
                      </div>
                    </div>
                </div>
              </Card>
            </div>
          </div>
        </>
    )
}