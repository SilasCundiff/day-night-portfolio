import { useAccordionContext } from '../AccordionContext';
import styled from 'styled-components';
import { HiChevronDown } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { useDayModeContext } from '@/contexts/DayModeContext';

const StyledHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${({ theme: { secondary } }) => secondary};

  color: ${({ theme: { primary } }) => primary};
  border-radius: ${({ active }) => (active ? '5px 0' : '5px')};
  padding: clamp(0.5rem, 2vh, 1rem) clamp(0.5rem, 1.5vw, 2.5rem);
  font-size: clamp(1.5rem, 3vw, 2rem);
  transition: color 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
  & svg {
    font-size: clamp(1.5rem, 3vw, 3rem);
    transition: transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .rotate {
    & svg {
      transform: rotate(180deg);
    }
  }
  &:hover {
    color: ${({ active, theme: { text, secondary } }) =>
      active ? text : text};
  }
`;

const Header = ({ children, id, ...restProps }) => {
  const { setActiveId, activeId } = useAccordionContext();
  const { dayMode } = useDayModeContext();
  const active = activeId === id ? true : false;

  const toggleActiveId = () => {
    if (active) {
      return setActiveId(null);
    }
    setActiveId(id);
  };

  return (
    <StyledHeader {...restProps} onClick={toggleActiveId} active={active}>
      <IconContext.Provider
        value={{ color: `${dayMode ? '#FFE9DC' : '#091215'}` }}
      >
        {children}
        <span className={`dropdown-arrow ${active ? 'rotate' : ''}`}>
          <HiChevronDown />
        </span>
      </IconContext.Provider>
    </StyledHeader>
  );
};

export { Header };
