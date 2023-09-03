import React from 'react';
import './Register.scss';
import { BackgroundVideo, Button, Gap, Input } from '../../components';
import { RegisterBg } from '../../assets'; /* Remember to export the bg files */

const Register = () => {
  return (
    <div className='main-page'>
      <BackgroundVideo link={RegisterBg}/>
      <div className='register'>
        <Gap height={20}/>      
        <p className="title">Register</p>
        <Gap height={20}/>  
        <Input label="Full Name" placeholder="Enter Full Name" />
        <Gap height={20}/>
        <Input label="Email" placeholder="Enter Email"  />
        <Gap height={20}/>
        <Input label="Password" placeholder="Enter Password"  />
        <Gap height={20}/>
        <Button label="Register" />
      </div>
    </div>
  )
}

export default Register