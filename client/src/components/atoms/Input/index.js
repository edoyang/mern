import React from 'react';
import './index.scss';
import Gap from '../Gap';

const Input = ({label, placeholder, ...rest}) => {
  return (
    <div>
        <p className="label">{label}</p>
        <Gap height={10}/>
        <input className="input" placeholder={placeholder} {...rest}/>
    </div>
  )
}

export default Input