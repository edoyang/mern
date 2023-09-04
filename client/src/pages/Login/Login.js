<<<<<<< HEAD
import React from 'react';
import './Login.scss';
import { BackgroundVideo, Button, Gap, Input, CustomLink, Navbar } from '../../components';
import { LoginBg } from '../../assets'; /* Remember to export the bg files */

const Login = () => {
  return (
    <div>
       <Navbar />
      <div className='main-page'>
        <BackgroundVideo link={LoginBg}/>
        <div className='login'>
          <Gap height={20}/>      
          <p className="title">Login</p>
          <Gap height={20}/>  
          <Input label="Full Name" placeholder="Enter Full Name" />
          <Gap height={20}/>
          <Input label="Email" placeholder="Enter Email"  />
          <Gap height={20}/>
          <Input label="Password" placeholder="Enter Password"  />
          <Gap height={20}/>
          <Button label="Login" />
          <Gap height={10}/>
          <CustomLink path="/register" className="login" Title="Create new account" />
        </div>
      </div>
    </div>
=======
import React from 'react'

const Login = () => {
  return (
    <p>Login</p>
>>>>>>> origin/main
  )
}

export default Login