import React from 'react';
import './Login.scss'
import { BackgroundVideo, Button, CustomLink, Gap, Input, Navbar } from '../../components';
import { LoginBg, RightLogin } from '../../assets';

const Login = () => {
  return (
    <BackgroundVideo link={LoginBg}>
      <Navbar />
      <div className='main-page-login'>
        <div className='left'>
          <p>LoginBg</p>
        </div>
        <div className='right' style={{ '--RightLogin': `url(${RightLogin})` }}>
          <div className='input'>
            <Input label="Email" placeholder="Enter Email" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Input label="Password" placeholder="Enter Password" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Gap height={20} />
            <Button label="Login" />
            <div className='gotoregister'>
              <p>Don't have an account yet ?</p>
              <CustomLink path="/register" label="Register Now" className="loginPageCustomLink" />
            </div>
          </div>
        </div>
      </div>
    </BackgroundVideo>
  )
}

export default Login;