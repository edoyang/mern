import React from 'react';
import './Register.scss';  // We're making this consistent with the Login component.
import { BackgroundVideo, Button, Gap, Input, CustomLink, Navbar } from '../../components';
import { RegisterBg, RightRegister } from '../../assets'; // Remember to export the bg files

const Register = () => {
  return (
    <BackgroundVideo link={RegisterBg}>
      <Navbar />
      <div className='main-page-register'>
        <div className='left'>
          <p>RegisterBg</p>
        </div>
        <div className='right' style={{ '--RightRegister': `url(${RightRegister})` }}>
          <div className="input">
            <Input label="Full Name" placeholder="Enter Full Name" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Input label="Email" placeholder="Enter Email" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Input label="Password" placeholder="Enter Password" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Gap height={20}/>
            <Button label="Register" />
            <div className='gotologin'>
              <p>Already have an account?</p>
              <CustomLink path="/login" className="registerPageCustomLink" label="Back to login"/>
            </div>
          </div>
        </div>
      </div>
    </BackgroundVideo>
  )
}

export default Register;
