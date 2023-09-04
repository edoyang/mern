import React from 'react';
import './Register.scss';
<<<<<<< HEAD
import { BackgroundVideo, Button, Gap, Input, CustomLink, Navbar } from '../../components';
=======
import { BackgroundVideo, Button, Gap, Input } from '../../components';
>>>>>>> origin/main
import { RegisterBg } from '../../assets'; /* Remember to export the bg files */

const Register = () => {
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
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
          <Gap height={10}/>
          <CustomLink path="/login" classname="login "Title="Back to login"/>
        </div>
    </div>
  </div>
=======
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
>>>>>>> origin/main
  )
}

export default Register