import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ text, size, color, backgroundColor, borderWidth, borderColor }) => {
  const [active, setActive] = useState(false);

  const onActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <button
      data-testid="storybook-button"
      className={`storybook-button storybook-button--${size} ${active ? "active" : ""}`}
      style={{ color, backgroundColor, border: `${borderWidth}px solid ${borderColor}` }}
      onClick={onActive}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
};

Button.defaultProp = {
  text: "Button",
  size: "small",
  color: "#000000",
  backgroundColor: "#ffffff",
  borderWidth: 1,
  borderColor: "#000000",
};
