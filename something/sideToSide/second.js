const array1 = [
    "number 1",
    "letter a",
    "sign |",
]
const array2 = [
    "number 2",
    "letter b",
    "sign !",
]
const array3 = [
    "number 3",
    "letter c",
    "sign ?",
]
const box = []

const limiter = (imageList) => {
    for (let i = 0; i <= imageList.length - 1; i++) {
        box.push(imageList[i])
    }
}

limiter(array1)
limiter(array2)
limiter(array3)

console.log(box)