import styled from "@emotion/styled";
import React from "react";

function CircleBtn(props) {
  const Button = styled.button`
    color: ${props.color};
    border-radius: 100%;
    background: ${props.bColor};
    border: none;
    height: 40px;
    width: 40px;
    padding: 4px 4px 0;
    // margin: 10px 10px 10px 0;
  `;
  return <Button>{props.icon}</Button>;
}

export default CircleBtn;
