import { useState } from "react"

export const useCounter= (initiaVlue = 10) =>{

    const [counter, setcounter] = useState(initiaVlue)

    const increment = (value = 1) =>{
        setcounter(counter + value );
    }

    const decrement = ( value = 1) =>{
        setcounter(counter - value);

    }

    const reset = () =>{
        setcounter(initiaVlue);
        
    }


    return{
        counter,
        increment,
        decrement,
        reset,

    }
}