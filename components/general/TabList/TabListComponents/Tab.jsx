import styled from 'styled-components';
import { useTabListContext } from '../TabListContext';
const StyledTab = styled.div`
  background-color: ${({ active, theme: { primary, secondary } }) =>
    active ? primary : secondary};
  color: ${({ active, theme: { primary, secondary } }) =>
    active ? secondary : primary};
  cursor: pointer;
  padding: 0.6rem 1.2rem 1.2rem;
  border-radius: 5px 5px 0 0;
  font-size: clamp(1.25rem, 2vw, 2rem);
  width: fit-content;
  white-space: nowrap;
  transition: color 0.35s cubic-bezier(0.77, 0, 0.18, 1);
  &:hover {
    color: ${({ active, theme: { text, secondary } }) =>
      active ? text : text};
  }
`;

const Tab = ({ id, children, className }) => {
  const { setActiveTabIndex, activeTabIndex } = useTabListContext();

  const active = activeTabIndex === id ? true : false;

  return (
    <StyledTab
      className={className}
      active={active}
      onClick={() => setActiveTabIndex(id)}
    >
      {children}
    </StyledTab>
  );
};

export { Tab };
