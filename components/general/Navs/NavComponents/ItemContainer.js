import React from 'react';
import styled from 'styled-components';

const StyledListItemContainer = styled.ul`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme: { primary } }) => primary};
  flex: 1 1 100%;
  width: 100%;
  overflow-y: auto;
  padding: 16px 0;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    max-width: 75%;
    background: none;
  }
`;

const ItemContainer = ({ children }) => {
  return (
    <StyledListItemContainer role='list'>{children}</StyledListItemContainer>
  );
};
export { ItemContainer };
