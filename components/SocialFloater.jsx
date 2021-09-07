import { useState } from 'react';
import { useDayModeContext } from '@/contexts/DayModeContext';
import Link from 'next/link';
import styled from 'styled-components';
import { FiGithub, FiPaperclip } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { HiOutlineMail, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const StyledSocialFloater = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column-reverse;
  svg {
    font-size: 1.8rem;
    padding: 0.8rem;
  }
  .toggler,
  .social-menu {
    background: ${({ theme: { primary } }) => primary};
    border-radius: 5px;
    margin: 0.5rem;
    transition: color 3s, background-color 3s;
  }
  .toggler {
    display: flex;
    max-width: 50%;
    margin: 0.5rem;
    & svg {
      margin: auto;
    }
  }
  .social-menu svg {
    margin: 0 0.2rem;
    display: flex;
    flex-direction: column;
  }
  .social-menu__icon-wrapper {
    display: flex;
    flex-direction: column;
    & svg {
      margin: 0.5rem auto 0;
    }
    .social-menu__icon-name {
      margin: 0 auto 0.5rem;
      padding: 0 0.8rem;
    }
  }
  .social-menu__icon-wrapper:last-of-type {
    margin-bottom: 0.5rem;
  }
  .slideIn {
    transform: translateX(0);
  }
  .slideOut {
    transform: translateX(-100vw);
  }
`;

function SocialFloater() {
  const { dayMode } = useDayModeContext();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <StyledSocialFloater>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
        >
          <span className={`social-menu ${menuOpen ? 'slideOut' : 'slideIn'}`}>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='https://github.com/SilasCundiff'>
                <FiGithub />
              </Link>
              <span className='social-menu__icon-name'>GitHub</span>
            </span>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='https://www.linkedin.com/in/silascundiff/'>
                <RiLinkedinLine />
              </Link>
              <span className='social-menu__icon-name'>LinkedIn</span>
            </span>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='#'>
                <FiPaperclip />
              </Link>
              <span className='social-menu__icon-name'>Resume</span>
            </span>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='mailto:silvanusdesigns@gmail.com'>
                <HiOutlineMail />
              </Link>
              <span className='social-menu__icon-name'>Email</span>
            </span>
          </span>
          <span className='toggler' onClick={handleToggle}>
            {menuOpen ? <HiChevronLeft /> : <HiChevronRight />}
          </span>
        </IconContext.Provider>
      </StyledSocialFloater>
    </>
  );
}

export default SocialFloater;
