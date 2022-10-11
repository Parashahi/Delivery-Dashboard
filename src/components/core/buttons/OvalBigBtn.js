import styled from "@emotion/styled";
import React from "react";

function OvalBtn(props) {
  const Button = styled.button`
    padding: 10px;
    border-radius: 22px;
    background: black;
    color: white;
    width: 100%;
    border: none;
    cursor: pointer;

    &:hover {
      background: #b6b6b6;
      color: black;
    }
  `;
  return <Button>{props.name}</Button>;
}

export default OvalBtn;
