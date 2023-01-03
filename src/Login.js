import React from 'react'
import Button from './Button'
import Input from './Input'
import "./Custom.scss"


export default function Login(props){
   
        
    return(
        <div className='login-page'>
            <div className='card'>
                <form onSubmit={this.onSubmit} >
                    <Input type="email" name="useremail" label="Email" placeholder="Email"/>
                    <Input type="password" label="Password" name="password" placeholder="Password"/>
                    <Button name="Login" />
                </form>
            </div>
        </div>
    )
}