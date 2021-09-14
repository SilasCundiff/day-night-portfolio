import styled from 'styled-components';
import { useTabListContext } from '../TabListContext';
const StyledPanel = styled.div`
  background-color: ${({ theme: { primary } }) => primary};
  width: 100%;
  margin-block: 1rem;
  font-weight: ${({ theme: { thin } }) => thin};
`;

const Panel = ({ active, children }) => {
  const { activeTabIndex } = useTabListContext();

  return (
    <StyledPanel>{active === activeTabIndex ? children : null}</StyledPanel>
  );
};

export { Panel };
