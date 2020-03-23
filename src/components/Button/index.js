import React from "react";
// import PropTypes from 'prop-types';
import "./Button.scss";

const Button = ({ children, onClick }) => {
  return <button className="button" onClick={onClick}>{children}</button>;
};

// Card.PropTypes = {
// 	text: PropTypes.string
// }

export default Button;
