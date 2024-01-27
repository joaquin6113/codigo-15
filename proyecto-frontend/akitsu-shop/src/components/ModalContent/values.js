import { useState } from "react"
    
export function ValuesAndFunctions(products, id, product) {
    const [titleValue, setTitleValue] = useState("")    
    const [descriptionValue, setDescriptionValue] = useState("")
    const [currentValue, setCurrentValue] = useState("")
    const [previousValue, setPreviousValue] = useState("")

    const handleTitleInputChange = (e) => setTitleValue(e.target.value)
    const handleDescInputChange = (e) => setDescriptionValue(e.target.value)
    const handleCurrentInputChange = (e) => setCurrentValue(e.target.value)
    const handlePreviousInputChange = (e) => setPreviousValue(e.target.value)

    if (id) {
        const [titleValue2, setTitleValue2] = useState(product[0].name)    
        const [descriptionValue2, setDescriptionValue2] = useState(product[0].description)
        const [currentValue2, setCurrentValue2] = useState(product[0].currentPrice)
        const [previousValue2, setPreviousValue2] = useState(product[0].originalPrice)

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

    return {
        values: {
          title: titleValue,
          description: descriptionValue,
          currentprice: currentValue,
          previousprice: previousValue,
        },
        handleInputs: {
            title: handleTitleInputChange,
            description: handleDescInputChange,
            currentprice: handleCurrentInputChange,
            previousprice: handlePreviousInputChange,
        }
        
    }
}