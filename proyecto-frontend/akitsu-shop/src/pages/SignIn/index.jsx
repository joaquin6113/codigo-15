import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../../slices/userSlice";
import { saveToken } from "../../slices/tokenSlice";
import { Card, Form } from "../../components";
import { inputs } from "./inputs";
import { showError } from "../../utils";
import { create } from "../../services";

export default function SignIn() {
    const { errors, values, handleInputChange, validateIfValuesHaveEmpty } = useForm({
        email: "",
        password: "",
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateIfValuesHaveEmpty()) return   

        const { ok, data } = await create(values, "users/login")
        
        if (!ok) {
          showError(data)
          return
        }

        if (localStorage.getItem("user")) {
          localStorage.removeItem("user")
          localStorage.removeItem("token")
        }

        dispatch(saveUser(data.user))
        dispatch(saveToken(data.token))
        navigate("/")
    }

    return (
        <>
        
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="flex justify-center items-center mb-10 text-6xl">¡Bienvenido!</h1>
            <Card className="max-w-md mx-0">
                <h1 className="text-3xl mt-5 mb-3">Login</h1>
                <p className="mb-5">Welcome back! Inicia sesión</p>
                <Form
                  handleInputChange={handleInputChange}
                  handleFormSubmit={handleSubmit}
                  inputs={inputs} 
                  values={values} 
                  errors={errors}
                  buttonText="Iniciar sesión"
                />
                <Link to="/signup">
                  <div className="text-center">
                    <span className="text-blue-800">¿No tienes una cuenta?</span>
                  </div>
                </Link>
            </Card>
          </div>
        </>
    )
}