import React from 'react';
import { Link } from 'react-router-dom';
import "./CustomLink.scss";

const CustomLink = ({ path, onClick, Title }) => {
  return (
    <Link to={path} className="CustomLink" onClick={onClick}>
      {Title}
    </Link>
  )
}

export default CustomLink;
