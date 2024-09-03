
import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        username:"",
        password:"",
        forgot:""
    })

    const {username, password, forgot} = data;

const handleChange = (e) => {
    setData({...data, [e.target.name]:[e.target.value]})
}


const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
}

const onForgot = () => {
console.log("onclicked")
}
  return (
    <div style={{justifyContent:"center"}}>
        <center>
            <form onSubmit={submitHandler}>
            <div style={{ marginBottom: '10px' }}>
            <input type='text' value={username} placeholder="user Name" name="username" onChange={handleChange}/>
            </div>
            <div style={{ marginBottom: '10px' }}>
            <input type='password' value={password} placeholder="Password" name="password"  onChange={handleChange}/>
            </div>
            <span style={{cursor:"pointer"}} onClick={onForgot}>Forgot Password</span>
            <div style={{ marginBottom: '10px' }}>
            <input type='submit' name="submit"/>

            </div>
            </form>
     
        </center>
    </div>
  )
}

export default Form
