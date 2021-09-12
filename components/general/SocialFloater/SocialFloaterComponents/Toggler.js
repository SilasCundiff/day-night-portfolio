import styled from 'styled-components';
import { HiChevronRight } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { useDayModeContext } from '@/contexts/DayModeContext';

const StyledToggler = styled.div`
  margin: 0.5rem;
  background: ${({ theme: { primary } }) => primary};
  border-radius: 5px;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  display: flex;
  max-width: 50%;
  margin-bottom: 0.2rem;

  svg {
    font-size: clamp(1.5rem, 2vw, 4rem);
    padding: 0.6rem;
    margin: auto;
    transform: ${({ menuOpen }) => !menuOpen && 'rotate(180deg)'};
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);
    & * {
      transition: color 0.5s cubic-bezier(0.77, 0, 0.18, 1);
    }
  }
  ${({ menuOpen }) => !menuOpen && 'max-width: 100%; '};

  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

function Toggler({ menuOpen, handleToggle }) {
  const { dayMode } = useDayModeContext();
  return (
    <StyledToggler onClick={handleToggle} menuOpen={menuOpen}>
      <IconContext.Provider
        value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
      >
        <HiChevronRight className={`${!menuOpen && 'rotate'}`} />{' '}
      </IconContext.Provider>
    </StyledToggler>
  );
}

export { Toggler };
