import { useState } from "react"
    
export function     ValuesAndFunctions(products, id) {
    const [titleValue, setTitleValue] = useState("")    
    const [descriptionValue, setDescriptionValue] = useState("")
    const [currentValue, setCurrentValue] = useState("")
    const [previousValue, setPreviousValue] = useState("")

    const handleTitleInputChange = (e) => setTitleValue(e.target.value)
    const handleDescInputChange = (e) => setDescriptionValue(e.target.value)
    const handleCurrentInputChange = (e) => setCurrentValue(e.target.value)
    const handlePreviousInputChange = (e) => setPreviousValue(e.target.value)

    const [titleValue2, setTitleValue2] = useState(products[Number(id) - 1]?.name)    
    const [descriptionValue2, setDescriptionValue2] = useState(products[Number(id) - 1]?.description)
    const [currentValue2, setCurrentValue2] = useState(products[Number(id) - 1]?.currentPrice)
    const [previousValue2, setPreviousValue2] = useState(products[Number(id) - 1]?.previousPrice)

    const handleTitleInputChange2 = (e) => setTitleValue2(e.target.value)
    const handleDescInputChange2 = (e) => setDescriptionValue2(e.target.value)
    const handleCurrentInputChange2 = (e) => setCurrentValue2(e.target.value)
    const handlePreviousInputChange2 = (e) => setPreviousValue2(e.target.value)

    return {
        values: {
          title: titleValue,
          description: descriptionValue,
          currentprice: currentValue,
          previousprice: previousValue,
          title2: titleValue2,
          description2: descriptionValue2,
          currentprice2: currentValue2,
          previousprice2: previousValue2,
        },
        handleInputs: {
            title: handleTitleInputChange,
            description: handleDescInputChange,
            currentprice: handleCurrentInputChange,
            previousprice: handlePreviousInputChange,
            title2: handleTitleInputChange2,
            description2: handleDescInputChange2,
            currentprice2: handleCurrentInputChange2,
            previousprice2: handlePreviousInputChange2,
        }
        
    }
}

// titleValue,
//         descriptionValue,
//         currentValue,
//         previousValue,
//         handleTitleInputChange,
//         handleDescInputChange,
//         handleCurrentInputChange,
//         handlePreviousInputChange