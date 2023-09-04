import React from 'react';
import './index.scss';
import Gap from '../Gap';

const Input = ({label, ...rest}) => {
  return (
    <div>
        <p className="label">{label}</p>
        <Gap height={10}/>
        <input className="input" {...rest}/>
    </div>
  )
}

export default Input