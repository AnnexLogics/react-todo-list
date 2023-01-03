import React from "react"
import "./Custom.css"
export default function Input(props){

    return(
        <div className="inputFeild">
            {/* <label>{props.label}: </label> */}
             <input type={props.type} name={props.name} placeholder={props.placeholder}></input>
        </div>
    )
}