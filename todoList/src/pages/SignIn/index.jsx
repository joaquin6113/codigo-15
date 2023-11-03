import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../slices/userSlice";
import { Card, Form } from "../../components";
import { inputs } from "./form";
import { findUser, showError } from "../../utils";

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

        const user = await findUser("email", values.email)

            if (!user || user.password !== values.password) {
                showError("Email o password incorrectos")
                return
            }

        dispatch(saveUser(user))
        navigate("/")
    }

    return (
        <>
          <div className="h-screen flex items-center ps-20 bg-[url('/todolist-bg.jpg')] bg-no-repeat bg-cover bg-center">
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
                {/* <Link>
                  <div className="text-center">
                    <span className="text-blue-800">¿No tienes una cuenta?</span>
                  </div>
                </Link> */}
            </Card>
          </div>
        </>
    ) 
}