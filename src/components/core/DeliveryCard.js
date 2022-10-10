import styled from "@emotion/styled";
import React from "react";

//component button
import OvalBigBtn from "./buttons/OvalBigBtn";

function DeliveryCard() {
  const CardMain = styled.div`
    border-radius: 20px;
    background: #ffffff;
    padding: 20px;
    width: 220px;
    // box-shadow: 0px 0px 0px 0.5px;
  `;

  const Head = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 1000;
    padding-bottom: 5px;
  `;

  const Para = styled.p`
    font-size: 12px;
    color: dark-grey;
  `;

  const ProgressBarMain = styled.div`
    position: relative;
    width: 100%;
    background: #ebeff1;
    border-radius: 20px;
    border: none;
    height: 6px;
    margin-top: 20px;
  `;

  const ProgressBar = styled.div`
    postion: absolute;
    width: 50%;
    height: inherit;
    background: black;
    border-radius: 20px;
  `;

  const Progress = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
  `;

  const ProgressDots = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin: 20px 0;
    position: relative;

    .radio-btn {
      border: 2px solid #b6b6b6;
      border-radius: 50%;
      height: 4px;
      width: 4px;
      position: relative;
      // margin: 10px 0;

      .checkmark {
        position: absolute;
        height: 8px;
        width: 8px;
        top: -2px;
        left: -2px;
        border-radius: 100%;
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      p {
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        left: 20px;
        top: -9px;
        color: black;
      }

      span {
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        left: 186px;
        top: -9px;
      }

      input {
        position: absolute;
        top: -3px;
        left: -3px;
        height: 11px;
        width: 11px;
        // opacity: 0;
        display: none;

        &:checked + .checkmark {
          opacity: 1;
          background-color: #66e22e;
          // color: black;
        }
      }
    }

    .dot1 {
      width: 1px;
      height: 1px;
      background-color: #b6b6b6;
      position: absolute;
      top: 10px;
      left: 3.5px;
    }
    .dot2 {
      width: 1px;
      height: 2px;
      background-color: #b6b6b6;
      position: absolute;
      top: 13px;
      left: 3.5px;
    }
    .dot3 {
      width: 1px;
      height: 2px;
      background-color: #b6b6b6;
      position: absolute;
      top: 17px;
      left: 3.5px;
    }
    .dot4 {
      width: 1px;
      height: 2px;
      background-color: #b6b6b6;
      position: absolute;
      top: 21px;
      left: 3.5px;
    }
    .dot5 {
      width: 1px;
      height: 1px;
      background-color: #b6b6b6;
      position: absolute;
      top: 25px;
      left: 3.5px;
    }
    .dot6 {
      width: 1px;
      height: 1px;
      background-color: #b6b6b6;
      position: absolute;
      top: 38px;
      left: 3.5px;
    }
    .dot7 {
      width: 1px;
      height: 2px;
      background-color: #b6b6b6;
      position: absolute;
      top: 41px;
      left: 3.5px;
    }
    .dot8 {
      width: 1px;
      height: 2px;
      background-color: #b6b6b6;
      position: absolute;
      top: 45px;
      left: 3.5px;
    }
    .dot9 {
      width: 1px;
      height: 2px;
      background-color: #b6b6b6;
      position: absolute;
      top: 49px;
      left: 3.5px;
    }
    .dot10 {
      width: 1px;
      height: 1px;
      background-color: #b6b6b6;
      position: absolute;
      top: 53px;
      left: 3.5px;
    }
  `;

  return (
    <>
      <CardMain>
        <Head>Delivery Status</Head>
        <Para>In progress</Para>

        <ProgressBarMain>
          <ProgressBar></ProgressBar>
        </ProgressBarMain>

        <Progress>
          <ProgressDots>
            <label className="radio-btn">
              <input type="radio" name="a" />
              <span className="checkmark"></span>
              <p>Checking</p>
              <span>12:34</span>
            </label>

            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <div className="dot4"></div>
            <div className="dot5"></div>

            <label className="radio-btn">
              <input type="radio" name="a" />
              <span className="checkmark"></span>
              <p>Checking</p>
              <span>12:34</span>
            </label>

            <div className="dot6"></div>
            <div className="dot7"></div>
            <div className="dot8"></div>
            <div className="dot9"></div>
            <div className="dot10"></div>

            <label className="radio-btn">
              <input type="radio" name="a" />
              <span className="checkmark"></span>
              <p>Checking</p>
              <span>12:34</span>
            </label>
          </ProgressDots>
        </Progress>

        <OvalBigBtn name="Show Status" />
      </CardMain>
    </>
  );
}

export default DeliveryCard;
