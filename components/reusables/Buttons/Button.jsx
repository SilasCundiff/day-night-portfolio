import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-height: 48px;
  min-width: 120px;
  outline: none;
  background-color: ${({ theme: { secondary } }) => secondary};
  border: none;
  border-radius: 0;
  padding: 0.8rem 1.5rem;
  color: ${({ theme: { primary } }) => primary};
  font-size: calc(16px + (28 - 16) * (100vw - 300px) / (1920 - 300));
  text-transform: uppercase;
  ${({ ghost }) =>
    ghost &&
    `
    background: transparent;
     border: currentColor solid 3px;
     `}
`;

const Button = (props) => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
