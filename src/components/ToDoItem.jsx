//import React, { useState } from "react"
import React from "react"


function ToDoItem(props){

//    const [isDone, setIsDone] = useState(false);

//    function handleClick(){

        // setIsDone((preValue) => {

        //     return !preValue;
        // })
 //   }
    return (

        <div onClick={() => {
            props.onChecked(props.id)
        }}>
            <li>{props.text}</li>
        </div>
    // <div onClick={handleClick}>
    //     <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
    // </div>
    )
}

export default ToDoItem;