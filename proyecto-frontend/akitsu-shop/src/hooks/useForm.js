import { useState } from "react"

export function useForm(inputs) {
    const [values, setValues] = useState(inputs)

    const [errors, setErrors] = useState(inputs)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const validateIfValuesHaveEmpty = () => {
        const empties = Object.keys(values)
        .filter((value) => !values[value])
        .map((value) => [value, "↑↑ Este campo es requerido ↑↑"])

        if (empties === 0) {
            setErrors({})
            return false
        }

        setErrors(Object.fromEntries(empties))
        return true
    }
    
    return {
        values,
        errors,
        handleInputChange,
        validateIfValuesHaveEmpty,
    }
}