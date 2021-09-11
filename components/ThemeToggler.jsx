import { useState } from 'react';
import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BiSun, BiMoon } from 'react-icons/bi';

const StyledThemeToggler = styled.div`
  position: fixed;
  top: 0;
  right: 0.5em;
  background: ${({ theme: { primary } }) => primary};
  padding: 0.6rem;
  margin: 0.5rem;
  border-radius: 5px;
  transition: color 0.5s cubic-bezier(0.77, 0, 0.18, 1),
    background-color 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    font-size: clamp(1.5rem, 2vw, 4rem);
  }
`;

function ThemeToggler() {
  const { dayMode, dayModeToggler, heroInView } = useDayModeContext();
  const [disabled, setDisabled] = useState(false);

  const dayModeTogglerWithDebouncer = () => {
    if (!heroInView) {
      return dayModeToggler();
    }
    if (heroInView && !disabled) {
      setDisabled(true);
      dayModeToggler();
      setTimeout(() => {
        setDisabled(false);
      }, 1050);
    }
  };

  return (
    <StyledThemeToggler>
      <span className='icon' onClick={dayModeTogglerWithDebouncer}>
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
