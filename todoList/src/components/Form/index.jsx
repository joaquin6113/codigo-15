import { Button, TextField } from "../../components"

export default function Form({ 
    handleFormSubmit,
    inputs,
    values,
    handleInputChange,
    errors,
    buttonText, 
}) {
    return (
        <form action="" className="mb-5 flex flex-col gap-5" onSubmit={handleFormSubmit}>                    
          {inputs.map((input) => {
            return (
              <div key={input.name}>
                <TextField 
                  placeholder={input.placeholder}
                  value={values[input.name]} 
                  name={input.name} 
                  type={input.type ?? "text"}
                  onChange={handleInputChange}
                />    
                <span className="text-red-500 mt-1 text-sm">{errors[input.name]}</span>    
              </div>    
            )
          })}                                                            
          <Button 
          text={buttonText} 
          className="rounded, w-full" 
          variant="secondary"
          type="submit"
          />                    
        </form>
    )
}