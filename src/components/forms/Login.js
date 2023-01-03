import React from 'react'
import Button from '../ui/buttons/Button'
import Input from '../ui/Input-feild/Input'
import "./Login.scss"


export default function Login(props){
   
        
    return(
        <div className='login-page'>
            <div className='card'>
                <form >
                    <Input type="email" name="useremail" label="Email" placeholder="Email"/>
                    <Input type="password" label="Password" name="password" placeholder="Password"/>
                    <Button name="Login" />
                </form>
            </div>
        </div>
    )
}