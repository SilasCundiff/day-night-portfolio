import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';

const StyledCurvedSVG = styled.svg`
  position: absolute;
  z-index: -1;
  /* width: 350vw; */
  /* height: 100vh; */
  /* width: 700px; */
  width: 187vw;
  /* height: 400px; */
  height: 60vh;
  background: transparent;
  overflow-x: hidden;
  transform: translateX(-45%);
  & * {
    transition: fill 3s;
  }
  ${({ bottom }) => (bottom ? 'bottom: 0' : 'top: 0')};
  .a {
    fill: ${({ dayMode }) => (dayMode ? '#c7273f' : '#203D49')};
  }
  .b {
    fill: ${({ dayMode }) => (dayMode ? '#cb2e41' : '#203846')};
  }
  .c {
    fill: ${({ dayMode }) => (dayMode ? '#530132' : '#0F1D24')};
  }
  .d {
    fill: ${({ dayMode }) => (dayMode ? '#2f112d' : '#091215')};
  }
`;

function CurvedSVG({ bottom }) {
  const { dayMode } = useDayModeContext();
  return (
    <StyledCurvedSVG
      bottom={bottom}
      width='1920'
      height='1110'
      viewBox='0 0 1920 1110'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      dayMode={dayMode}
    >
      <path
        className='a'
        d='M0 38H1920V596.804V784C1920 784 960 1541.39 960 743.956C960 -53.475 0 596.804 0 596.804V38Z'
      />
      <path
        className='b'
        d='M0 0H1920V300C1920 300 1344.58 226.334 974 225.5C592.519 224.642 0 300 0 300V0Z'
      />
      <path
        className='c'
        d='M0 0H1920V300C1920 300 1540.44 196.296 1216.5 176.5C938.862 159.533 682.246 177.957 418 219.5C350 193 206.192 161.65 131 176.5C27.3209 196.976 0 252.5 0 252.5V0Z'
      />
      <path
        className='d'
        d='M2.38419e-07 0C2.38419e-07 0 324.534 67.0527 534.5 60.5C699.167 55.361 952 0 952 0H1920V300C1633.61 184.532 1464.09 145.338 1140 137.5C815.911 129.662 652.119 233.783 357 153.5C302.339 138.63 96 81 0 153.5C3.43323e-05 46 2.38419e-07 0 2.38419e-07 0Z'
      />
    </StyledCurvedSVG>
  );
}

export default CurvedSVG;
