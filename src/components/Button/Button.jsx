import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ text, size }) => {
  return <button className={`storybook-button storybook-button--${size}`}>{text}</button>;
};

Button.propsTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
