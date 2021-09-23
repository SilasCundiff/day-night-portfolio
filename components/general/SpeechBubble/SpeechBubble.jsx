import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDayModeContext } from '@/contexts/DayModeContext';

const StyledSpeechBubble = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : '100%')};
  left: ${({ left }) => (left ? left : '29%')};
  max-width: 30rem;
  z-index: 100;
  background-color: ${({ theme: { secondary } }) => `${secondary}dd`};
  color: ${({ theme: { primary } }) => primary};
  padding: 1.125em 1.5em;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 400;
  border-radius: 5px;
  transition: opacity 0.5s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  opacity: 0;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.2);
  visibility: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 0.75rem solid transparent;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
    ${({ speechOrigin, theme: { secondary } }) => {
      if (speechOrigin === 'top') {
        return `bottom: 100%;
    border-top: none;
    border-bottom-color: ${secondary}dd;
    left: 1.5em;`;
      }
      if (speechOrigin === 'bottom') {
        return `top: 100%;
    border-bottom: none;
    border-top-color: ${secondary}dd;
    left: 1.5em;`;
      }
    }}
  }

  ${({ open }) =>
    open
      ? 'opacity: 1; visibility: visible;'
      : 'opacity: 0; visibility: hidden;'};
  & .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.25em 0.5em;
    border-radius: 0;
    cursor: pointer;
    svg {
      font-size: clamp(1.25rem, 1.4vw, 3rem);
    }
  }
  & p:first-of-type {
    margin-top: 0.7em;
  }
  & p:last-of-type {
    margin-bottom: 0.7em;
  }
  & p {
    margin-top: 0.4em;
    margin-inline: 0.2em;
  }

  .timeLeftBar {
    display: block;
    position: absolute;
    bottom: 0.5em;
    left: 50%;
    transform: translate(-50%, 0);
    height: 0.5em;
    width: 95%;
    background-color: ${({ theme: { primary } }) => primary};
    border-radius: 5px;
    opacity: 0.5;
  }

  /* transition the bar to 0 width for the duration of the close, resets on hover. */
  .close {
    width: 0%;
    transition-duration: ${({ closeDelay }) => `${closeDelay / 1000}s`};
    transition-property: width;
    transition-timing-function: linear;
  }

  /* prevent bar from counting down while bubble is hovered */
  .hovered {
    width: 95%;
    transition: none;
  }

  /* Prevent bar from popping back to full just before bubble closes */
  .cleanup {
    opacity: 0;
  }

  @media only screen and (max-width: 1279px) {
    display: none;
  }
`;

function SpeechBubble({
  children,
  top,
  left,
  openDelay = 3000,
  closeDelay = 5000,
  parentInView,
  speechOrigin = 'bottom',
}) {
  const { dayMode } = useDayModeContext();

  const [open, setOpen] = useState(false);
  const [openedOnce, setOpenedOnce] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isHovering = () => setHovered(true);
  const isNotHovering = () => setHovered(false);

  useEffect(() => {
    if (parentInView && !openedOnce) {
      const delayedOpen = setTimeout(() => {
        setOpen(true);
        setOpenedOnce(true);
      }, openDelay);
      return () => {
        clearTimeout(delayedOpen);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentInView]);

  useEffect(() => {
    const delayedClose = setTimeout(() => {
      setOpen(false);
    }, closeDelay);
    if (hovered) {
      clearTimeout(delayedClose);
    }
    return () => {
      clearTimeout(delayedClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, hovered]);

  return (
    <StyledSpeechBubble
      open={open}
      top={top}
      left={left}
      onMouseEnter={isHovering}
      onMouseLeave={isNotHovering}
      closeDelay={closeDelay}
      speechOrigin={speechOrigin}
    >
      {children}
      <span
        className={`timeLeftBar ${hovered && 'hovered'} ${
          open ? 'close' : 'cleanup'
        }`}
      ></span>
      <span className='close-icon' onClick={() => setOpen(false)}>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#FFE9DC' : '#091215'}` }}
        >
          <FaTimes />
        </IconContext.Provider>
      </span>
    </StyledSpeechBubble>
  );
}

export default SpeechBubble;
