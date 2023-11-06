import { useState } from "react"
    
export function ValuesAndFunctions() {
    const [titleValue, setTitleValue] = useState("")    
    const [descriptionValue, setDescriptionValue] = useState("")
    const [currentValue, setCurrentValue] = useState("")
    const [previousValue, setPreviousValue] = useState("")

    const handleTitleInputChange = (e) => setTitleValue(e.target.value)
    const handleDescInputChange = (e) => setDescriptionValue(e.target.value)
    const handleCurrentInputChange = (e) => setCurrentValue(e.target.value)
    const handlePreviousInputChange = (e) => setPreviousValue(e.target.value)

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

// titleValue,
//         descriptionValue,
//         currentValue,
//         previousValue,
//         handleTitleInputChange,
//         handleDescInputChange,
//         handleCurrentInputChange,
//         handlePreviousInputChange