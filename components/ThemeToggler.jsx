import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BiSun, BiMoon } from 'react-icons/bi';

const StyledThemeToggler = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;

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
