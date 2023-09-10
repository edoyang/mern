import React from 'react';
import Gap from '../Gap';

const Input = ({label, classLabel, classComponent, classInput, placeholder, ...rest}) => {
  return (
    <div className={classComponent}>
        <p className={classLabel}>{label}</p>
        <Gap height={10} />
        <input className={classInput} placeholder={placeholder} {...rest}/>
        <Gap height={10} />
    </div>
  )
}

export default Input;
