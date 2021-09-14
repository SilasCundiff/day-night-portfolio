import styled from 'styled-components';

const StyledTabsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  margin-top: 1rem auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabsContainer = ({ children }) => (
  <StyledTabsContainer>{children}</StyledTabsContainer>
);

export { TabsContainer };
