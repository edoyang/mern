import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ path, onClick, label, className }) => {
  return (
    <Link to={path} className={`CustomLink ${className}`} onClick={onClick}>
      {label}
    </Link>
  )
}

export default CustomLink;
