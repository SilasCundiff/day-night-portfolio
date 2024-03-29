import React from 'react';
import styled from 'styled-components';
import { useNavContext } from '../NavContext';

const StyledNavItem = styled.li`
  padding: 0.5rem 1rem;
  &:first-of-type {
    margin-left: auto;
  }

  color: ${({ theme: { secondary } }) => secondary};
  cursor: pointer;
  transition: color 3s;
  & a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 1.5rem;
    &:hover {
      color: ${({ theme: { accent } }) => accent};
      transition: color 0.2s;
    }
  }
`;

const ListItem = ({ children }) => {
  const { handleCloseNav } = useNavContext();
  return <StyledNavItem onClick={handleCloseNav}>{children}</StyledNavItem>;
};

export { ListItem };
