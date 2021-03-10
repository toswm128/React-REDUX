import React, {useState} from "react"

function Home(){
    const [text,setText] = useState("")
    const onchange = e =>{
        setText(e.target.value)
    }
    return(
        <div>
            <h1>ToDo</h1>
            <form action="">
                <input type="text" value={text} onChange={onchange}/>
                <button>Add</button>
            </form>
            <ul></ul>
        </div>
    )
}

export default Home;