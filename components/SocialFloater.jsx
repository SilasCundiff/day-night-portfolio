import React, { useState } from 'react';
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
      & * {
        transition: color 3s;
      }
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
    cursor: pointer;
    & svg {
      margin: 0.5rem auto 0;
      & * {
        transition: color 3s;
      }
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
  .social-menu--link {
    text-align: center;
  }
  @media only screen and (min-width: 1280px) {
    top: 50%;
    transform: translateY(-50%);
    .toggler {
      display: none;
    }
    .social-menu--desktop {
      background: none;
      transform: translateX(0);
      margin: 0.2rem;
    }
    .social-menu__icon-name {
      opacity: 0;
      color: ${({ theme: { secondary } }) => secondary};
      transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .social-menu__icon-wrapper:hover .social-menu__icon-name {
      opacity: 1;
      color: ${({ theme: { secondary } }) => secondary};
    }
    .social-menu__icon-wrapper svg {
      margin: 0 auto 0;

      transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .social-menu__icon-wrapper:hover svg {
      opacity: 1;

      color: ${({ theme: { secondary } }) => secondary};
    }
  }
`;

function SocialFloater() {
  const { dayMode } = useDayModeContext();

  const [menuOpen, setMenuOpen] = useState(true);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <StyledSocialFloater>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
        >
          <span
            className={`social-menu ${
              menuOpen ? 'slideOut' : 'slideIn'
            } social-menu--desktop`}
          >
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='https://github.com/SilasCundiff'>
                <IconLink className='social-menu--link'>
                  <FiGithub />
                  <span className='social-menu__icon-name'>GitHub</span>
                </IconLink>
              </Link>
            </span>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='https://www.linkedin.com/in/silascundiff/'>
                <IconLink className='social-menu--link'>
                  <RiLinkedinLine />
                  <span className='social-menu__icon-name'>LinkedIn</span>
                </IconLink>
              </Link>
            </span>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='/extras/resume.pdf' download>
                <IconLink className='social-menu--link'>
                  <FiPaperclip />
                  <span className='social-menu__icon-name'>Resume</span>
                </IconLink>
              </Link>
            </span>
            <span className='social-menu__icon-wrapper'>
              <Link passHref href='mailto:silvanusdesigns@gmail.com'>
                <IconLink className='social-menu--link'>
                  <HiOutlineMail />
                  <span className='social-menu__icon-name'>Email</span>
                </IconLink>
              </Link>
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

export const IconLink = React.forwardRef(
  ({ children, href, className }, ref) => {
    return (
      <a href={href} ref={ref} className={className}>
        {children}
      </a>
    );
  }
);

IconLink.displayName = 'IconLink';

export default SocialFloater;
