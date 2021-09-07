import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BiSun, BiMoon } from 'react-icons/bi';

const StyledThemeToggler = styled.div`
  position: fixed;
  top: 0;
  right: 0.5rem;
  background: ${({ theme: { primary } }) => primary};
  padding: 0.6rem;
  margin: 0.5rem;
  border-radius: 5px;
  transition: color 3s, background-color 3s;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    font-size: 2rem;
  }
`;

function ThemeToggler() {
  const { dayMode, dayModeToggler } = useDayModeContext();

  return (
    <StyledThemeToggler>
      <span className='icon' onClick={dayModeToggler}>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
        >
          {dayMode ? <BiMoon /> : <BiSun />}
        </IconContext.Provider>
      </span>
    </StyledThemeToggler>
  );
}

export default ThemeToggler;
