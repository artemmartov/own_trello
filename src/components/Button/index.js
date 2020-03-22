import React from "react";
// import PropTypes from 'prop-types';
import "./Button.scss";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

// Card.PropTypes = {
// 	text: PropTypes.string
// }

export default Button;
