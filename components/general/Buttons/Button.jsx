import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  padding: 0.625em 1em;
  background-color: ${({ theme: { secondary } }) => secondary};
  border-radius: 0;
  border: none;

  color: ${({ theme: { primary } }) => primary};
  font-size: clamp(1rem, 1.5vw, 2rem);
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  margin: 0 1em;
  transition: color 0.5s cubic-bezier(0.22, 0.61, 0.36, 1),
    background-color 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  & a {
    text-decoration: none;
    color: inherit;
  }
  & span {
    position: relative;
    z-index: 2;
  }
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme: { primary } }) => primary};
    transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover {
    color: ${({ theme: { secondary } }) => secondary};
    transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    border: ${({ ghost, theme: { primary } }) =>
      ghost && `${primary} solid 3px`};
  }

  &:hover:after {
    width: 100%;
  }

  ${({ ghost, theme: { primary } }) =>
    ghost &&
    `
    background: transparent;
     border: ${primary} solid 3px; box-sizing: content-box; padding: calc(0.625em - 3px) calc(1em - 3px);

     `}
`;

const Button = (props) => {
  const { children } = props;

  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
