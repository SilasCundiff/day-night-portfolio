import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BiSun, BiMoon } from 'react-icons/bi';
const StyledThemeToggler = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;

  svg {
    font-size: 2rem;
  }
`;

function ThemeToggler({ dayMode, dayModeToggler }) {
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
