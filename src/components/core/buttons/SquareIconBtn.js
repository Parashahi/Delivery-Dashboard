import styled from "@emotion/styled";
import React from "react";
import "../../../App.scss";

function SquareIconBtn(props) {
  const Button = styled.button`
    background: $secondary;
    border: none;
    border-radius: 14px;
    padding-top: 4px;
    height: 40px;
    width: 40px;
  `;
  return (
    <>
      <Button>{props.icon}</Button>
    </>
  );
}

export default SquareIconBtn;
