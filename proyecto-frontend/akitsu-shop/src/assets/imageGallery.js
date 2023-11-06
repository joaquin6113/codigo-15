import clothesProducts from "./clothesProducts"
import homeProducts from "./homeProducts"
import kitchenProducts from "./kitchenProducts"
import othersProducts from "./othersProducts"

const all = []

const limiter = (imageList) => {
    for (let i = 0; i <= imageList.length - 1; i++) {
        all.push(imageList[i])
    }
}

limiter(clothesProducts)
limiter(homeProducts)
limiter(kitchenProducts)
limiter(othersProducts)

export const imageGallery = all