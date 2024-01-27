const times = [
    1706363659217,
    1706363667956,
    1706363695341,
    1706363704878,
    1706363718956,
    1706363728016,
    1706363737070,
    1706363745054,
    1706363597246,
    1706327917325,
    1706363607212,
    1706363615148,
    1706363761124,
    1706363767631,
    1706363775256,
    1706363782113,
    1706363788132,
]



let counter = 0

const outputUrls = [
    {home: []},
    {kitchen: []},
    {clothes: []},
    {others: []},
]

let category = [
    "home",
    "kitchen",
    "clothes",
    "others",
]

for (let i = 0; i < 4; i += 1) {
    for (let h = 0; h < 4; h += 1) {
        let url = `https://proyecto-akitsu-shop.s3.us-west-2.amazonaws.com/images/codigo-15-${times[counter]}-${category[i]}-product-${h+1}.jpg`
        if (counter < 4){
            outputUrls[i].home.push(url)
        } else if (counter < 8) {
            outputUrls[i].kitchen.push(url)
        } else if (counter < 12) {
            outputUrls[i].clothes.push(url)
        } else {
            outputUrls[i].others.push(url)
        }
        counter += 1
    }
}

outputUrls[3].others.push(`https://proyecto-akitsu-shop.s3.us-west-2.amazonaws.com/images/codigo-15-${times[16]}-${category[3]}-product-5.jpg`)

export const finalUrls = outputUrls