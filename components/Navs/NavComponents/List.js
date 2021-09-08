import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  flex: 1 1 80%;
  width: 100%;
  max-height: 75%;
  margin: auto 0 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    max-height: 100%;
    flex: 1 1 50%;
    margin: auto;
  }
`;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export { List };
