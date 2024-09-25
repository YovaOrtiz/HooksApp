import { useState } from "react";


export const useForm = (initiaForm = {}) => {

    const [formState, setFormState] = useState(initiaForm);


    const onInputChange =({target}) => {
        const{name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const onResetForm = () => {
        setFormState(initiaForm);
    }

  
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }
}
