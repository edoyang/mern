import React, { useState } from 'react';
import './Register.scss';
import { Button, Gap, Input, CustomLink, Navbar } from '../../components';
import { RightRegister } from '../../assets';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const isEmailValid = (email) => {
  //   // Basic email format validation
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   return emailRegex.test(email);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (!isEmailValid(email)) {
    //   alert('Invalid email format. Please enter a valid email address.');
    //   return;
    // }

    try {
      const response = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to register.');
      }
      alert('Registered successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='main-page-register'>
        <div className='left'>
          <p>RegisterBg</p>
        </div>
        <div className='right' style={{ '--RightRegister': `url(${RightRegister})` }}>
          <form onSubmit={handleSubmit} className="input">
            <Input value={name} onChange={e => setName(e.target.value)} label="Full Name" placeholder="Enter Full Name" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Input value={email} onChange={e => setEmail(e.target.value)} label="Email" placeholder="Enter Email" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Input value={password} onChange={e => setPassword(e.target.value)} label="Password" placeholder="Enter Password" type="password" classComponent="input-container" classLabel="input-label" classInput="input-field" />
            <Gap height={20} />
            <Button label="Register" type="submit" />
            <div className='gotologin'>
              <p>Already have an account?</p>
              <CustomLink path="/login" className="registerPageCustomLink" label="Back to login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;