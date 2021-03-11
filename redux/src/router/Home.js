import React, {useState} from "react"
import {connect} from "react-redux"

function Home({toDos}){
    console.log(toDos)
    const [text,setText] = useState("")
    const onchange = e =>{
        setText(e.target.value)
    }
    const onSubmit = e =>{
        e.preventDefault();
        console.log(text);
        setText("")
    }
    return(
        <div>
            <h1>ToDo</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onchange}/>
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {toDos:state}
}

export default connect(mapStateToProps)  (Home);