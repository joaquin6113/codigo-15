import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { saveUser } from "../../slices/userSlice"
import { Card, Form } from "../../components"
import { inputs } from "./inputs"
import { create } from "../../services"

export default function SignUp() {
    const { errors, values, handleInputChange, validateIfValuesHaveEmpty } = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!validateIfValuesHaveEmpty()) return
        
        const user = await create(values, "users")
        dispatch(saveUser(user))
        navigate("/signin")
    }

    return (
        <>
          <div className="h-screen flex items-center justify-center mx-auto max-w-md">
            <Card>
                <h1 className="text-2xl font-semibold capitalize my-5">crear cuenta</h1>
                <Form 
                  handleFormSubmit={handleFormSubmit}
                  handleInputChange={handleInputChange}
                  inputs={inputs}
                  values={values}
                  errors={errors}
                  buttonText="Crear cuenta"
                />
                <Link to="/signin">
                  <div className="text-center">
                    <span className="text-blue-800">¿Ya tienes una cuenta? Inicia sesión!</span>
                  </div>
                </Link>
            </Card>
          </div>
        </>
    )
}