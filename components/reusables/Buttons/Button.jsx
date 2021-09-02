import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-height: 48px;
  min-width: 120px;
  border-radius: 0;
  outline: none;
  border: none;
  color: ${({ theme: { primary } }) => primary};
  background-color: ${({ theme: { secondary } }) => secondary};
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;

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
