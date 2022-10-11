import styled from "@emotion/styled";
import React from "react";
import OvalMiniBtn from "../buttons/OvalMiniBtn";

function Whitepaper(props) {
  const PaperMain = styled.div`
    border-radius: 20px;
    padding: 20px 25px;
    background: white;
    width: 160px;
    height: 75px;
  `;

  const PaperHead = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Heading = styled.div`
    font-size: 14px;
    font-weight: 600;
  `;

  const Button = styled.div`
    button {
      border: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;

      &:hover {
        background: #f9fbfc;
      }

      .dot {
        width: 2px;
        height: 2px;
        background: black;
        display: block;
        border: none;
        border-radius: 50%;
        margin: 2px 0px 2px 9px;
      }
    }
  `;

  const PaperBody = styled.div`
    padding-top: 5px;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 30px;
      font-weight: bolder;
    }

    Button {
      margin: 15px 0 0 0;
    }
  `;

  return (
    <>
      <PaperMain>
        <PaperHead>
          <Heading>
            <p>{props.head}</p>
          </Heading>
          <Button>
            <button>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </button>
          </Button>
        </PaperHead>

        <PaperBody>
          <h1>{props.body}</h1>
          <OvalMiniBtn
            name={props.button}
            color={props.color}
            btnColor={props.btnColor}
          />
        </PaperBody>
      </PaperMain>
    </>
  );
}

export default Whitepaper;
