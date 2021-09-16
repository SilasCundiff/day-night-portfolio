import styled from 'styled-components';
import { useTabListContext } from '../TabListContext';
const StyledPanelsContainer = styled.div`
  background-color: ${({ theme: { primary } }) => primary};
  height: 100%;
  padding: 1rem 1.5rem 0;
  /* border-radius: 5px; */
  /* margin-bottom: 0.2rem; */
  overflow-y: auto;
  border-radius: ${({ active }) => (active === 0 ? '0 5px 5px 5px' : '5px')};

  /* overflow-x: scroll; */

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { accent } }) => accent};
    outline: 1px solid ${({ theme: { accent } }) => accent};
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme: { primary } }) => primary};
  }
`;

const PanelsContainer = ({ children }) => {
  const { activeTabIndex } = useTabListContext();
  return (
    <StyledPanelsContainer active={activeTabIndex}>
      {children}
    </StyledPanelsContainer>
  );
};

export { PanelsContainer };
