import { css } from "@emotion/core";

export const button = ({ align, color }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;

    padding: 16px;
    color: ${textColor};
    text-align: ${align};
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
  `;
};
