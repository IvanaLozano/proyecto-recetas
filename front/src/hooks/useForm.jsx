import { useState } from "react";
import { helpHttp } from "../componentes/helpHttp";

export const useForm = (intialForm, validateForm) =>{

    const [form, setForm]= useState(intialForm);
    const [errors, setErrors]= useState({});
    const [loading, setLoading] = useState(false);
    const [respuesta, setRespuesta] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleValidacion = (e) => {
        handleChange(e);
        setErrors(validateForm(form));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("Enviando formulario");
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/ivaniitalozano@gmail.com",{
                body: form,
                headers: {
                    "Content-Type": "aplication/json",
                    Accept: "aplication/json",
                }

            })
            .then( (res) =>{
                setLoading(false);
                setRespuesta(true);
                setForm(intialForm);
                setTimeout(() => {
                    setRespuesta(false);
                }, 5000)
            })
        }else{
            return;
        }

    }



    return {form, errors, loading, respuesta, handleChange, handleSubmit, handleValidacion}
}