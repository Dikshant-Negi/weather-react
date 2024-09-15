
export const Input=()=>{
    const handleOnSubmit=(event)=>{
        event.PreventDefault()
    }
    return <>
    <form onSubmit={handleOnSubmit}>
        <input type="text" />
    </form>
    </>
}