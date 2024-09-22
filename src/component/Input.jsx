import {useRef} from "react"
import './style.css'
export const Input=({setInput})=>{
    const inputElement=useRef("");
    const handleOnSubmit=(event)=>{
        event.preventDefault()
    }
    const handleOnClick=()=>{
        setInput(inputElement.current.value);
    }
    return <>
    <form onSubmit={handleOnSubmit}>
        <input type="text" ref={inputElement}className="insert" />
        <button type="submit" onClick={handleOnClick}>Submit</button>
    </form>
    </>
}