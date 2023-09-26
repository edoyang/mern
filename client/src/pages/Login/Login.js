import React, { useState } from 'react';
import './Login.scss';
import { Button, CustomLink, Gap, Input, Navbar } from '../../components';
import { RightLogin } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }
  
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userRole', data.userRole);  // Assuming the backend returns this
      setWelcomeMessage(`Welcome ${data.name}`);
  
      setTimeout(() => {
        navigate('/home');
      }, 3000);
  
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='main-page-login'>
        <div className='left'>
          <p>LoginBg</p>
        </div>
        <div className='right' style={{ '--RightLogin': `url(${RightLogin})` }}>
          <form onSubmit={handleSubmit} className='input'>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label='Email'
              placeholder='Enter Email'
              classComponent='input-container'
              classLabel='input-label'
              classInput='input-field'
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label='Password'
              placeholder='Enter Password'
              type='password'
              classComponent='input-container'
              classLabel='input-label'
              classInput='input-field'
            />
            {error && <p className='error-message'>{error}</p>}
            {welcomeMessage && <p className='welcome-message'>{welcomeMessage}</p>}
            <Gap height={20} />
            <Button label='Login' />
            <div className='gotoregister'>
              <p>Don't have an account yet?</p>
              <CustomLink path='/register' label='Register Now' className='loginPageCustomLink' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;