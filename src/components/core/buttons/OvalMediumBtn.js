import styled from "@emotion/styled";
import React from "react";

function OvalMediumBtn(props) {
  const Button = styled.button`
    font-weight: bold;
    font-size: 12px;
    border-radius: 20px;
    padding: 0 30px;
    height: 30px;
    background: ${props.BGcolor};
    color: black;
    border: none;
  `;
  return (
    <>
      <Button>{props.name}</Button>
    </>
  );
}

export default OvalMediumBtn;
