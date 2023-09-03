import React from 'react';
import './index.scss'

const index = ({label, ...rest}) => {
  return (
    <div>
        <button className="button" {...rest}>{label}</button>
    </div>
  )
}

export default index