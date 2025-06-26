import React from "react";
import styled from "styled-components";

const Switch = (): React.JSX.Element => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
        <span className="hand left">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M0 9H13V15C13 15.2761 12.7761 15.5 12.5 15.5H0V9Z"
              fill="#3B82F6"
            />
            <path
              d="M13.5 9H21C21.5523 9 22 9.44772 22 10V15C22 15.5523 21.5523 16 21 16H17.5C15.2909 16 13.5 14.2091 13.5 12V9Z"
              fill="#FED5CD"
            />
            <path
              d="M13 9H15V14.5C15 14.7761 14.7761 15 14.5 15H13V9Z"
              fill="#ffffff"
            />
            <path
              className="thumb"
              d="M23.25 9.19999H15V14.2C16.933 14.2 18.5 12.633 18.5 10.7L22.25 10.7C22.9403 10.7 23.5 10.1404 23.5 9.44999C23.5 9.31192 23.3881 9.19999 23.25 9.19999Z"
              fill="#FDE3D9"
            />
          </svg>
        </span>
        <span className="hand right">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M24 9H11V15C11 15.2761 11.2239 15.5 11.5 15.5H24V9Z"
              fill="#3B82F6"
            />
            <path
              d="M10.5 9H3C2.44772 9 2 9.44772 2 10V15C2 15.5523 2.44772 16 3 16H6.5C8.70914 16 10.5 14.2091 10.5 12V9Z"
              fill="#FED5CD"
            />
            <path
              d="M11 9H9V14.5C9 14.7761 9.22386 15 9.5 15H11V9Z"
              fill="#ffffff"
            />
            <path
              className="thumb"
              d="M0.750003 9.19999H9V14.2C7.067 14.2 5.5 12.633 5.5 10.7L1.75002 10.7C1.05965 10.7 0.5 10.1404 0.5 9.44999C0.5 9.31192 0.61193 9.19999 0.750003 9.19999Z"
              fill="#FDE3D9"
            />
          </svg>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 4em;
    height: 2em;
    border-radius: 30px;
    overflow: hidden;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 0;
    background-color: #d0b0ff;
    transition: 0.4s 0.4s;
  }

  .slider:after {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: #242824;
    transition: 0.4s 0.4s;
    z-index: 10;
  }

  .switch input:checked + .slider::before {
    width: 100%;
  }

  .switch input:checked + .slider:after {
    transform: translateX(2em);
    background-color: #9147ff;
  }

  .switch .hand {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 62px;
    height: 62px;
    transition: 0.4s ease;
  }

  .switch .hand.left {
    left: -62px;
  }

  .switch .hand.right {
    right: -62px;
  }

  .switch .hand.left,
  .switch .hand.right {
    animation: none;
  }

  .switch:focus-within input:checked ~ .hand.right {
    animation: hand-right 0.7s linear;
  }

  .switch:focus-within input:not(:checked) ~ .hand.left {
    animation: hand-left 0.7s linear;
  }

  @keyframes hand-left {
    0% {
      left: -62px;
    }
    50% {
      left: 0px;
    }
    100% {
      left: -62px;
    }
  }

  @keyframes hand-right {
    0% {
      right: -62px;
    }
    50% {
      right: 0px;
    }
    100% {
      right: -62px;
    }
  }
`;

export default Switch;
