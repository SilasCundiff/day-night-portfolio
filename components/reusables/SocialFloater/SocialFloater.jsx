import React, { useState } from 'react';
import { useDayModeContext } from '@/contexts/DayModeContext';
import Link from 'next/link';
import styled from 'styled-components';
import { FiGithub, FiPaperclip } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Toggler } from './SocialFloaterComponents';

const StyledSocialFloater = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column-reverse;
  .social-menu {
    margin: 0.5rem;
    background: ${({ theme: { primary } }) => primary};
    border-radius: 5px;
    transition: color 0.5s cubic-bezier(0.77, 0, 0.18, 1),
      background-color 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  }

  svg {
    font-size: clamp(1.5rem, 2vw, 4rem);
    padding: 0.6rem;
  }
  .social-menu svg {
    display: flex;
    flex-direction: column;
  }

  .link-wrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 0.5rem;
    text-align: center;
    color: ${({ theme: { secondary } }) => secondary};
    & svg {
      margin: 0.5em auto 0;
    }
    .link-icon--text {
      padding: 0 0.9em;
      font-size: clamp(0.8rem, 1vw, 1.25rem);
    }
  }

  .link-wrapper:last-of-type {
    margin-bottom: 1rem;
  }

  .social-menu {
    margin-top: 0.1rem;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  }
  .slideIn {
    transform: translateX(0);
  }
  .slideOut {
    transform: translateX(-50vw);
  }

  @media only screen and (min-width: 1280px) {
    top: 50%;
    transform: translate(0, -50%);
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);

    ${({ heroInView }) => heroInView && 'transform: translate(-100%, -50%)'};

    .social-menu--desktop {
      background: none;
      transform: translateX(0);
      margin: 0.2rem;
    }
    .link-icon--text {
      opacity: 0;
      transition: color 0.5s cubic-bezier(0.77, 0, 0.18, 1),
        opacity 0.5s cubic-bezier(0.77, 0, 0.18, 1);
      color: ${({ theme: { secondaryDimmer } }) => secondaryDimmer};
    }

    .link-wrapper:hover svg {
      & * {
        color: ${({ theme: { secondaryDimmer } }) => secondaryDimmer};
      }
    }

    .link-wrapper:hover .link-icon--text {
      opacity: 1;
    }

    .link-wrapper svg {
      margin: 0 auto 0;
      & * {
        transition: color 0.5s cubic-bezier(0.77, 0, 0.18, 1);
      }
    }
  }
`;

function SocialFloater() {
  const { dayMode, heroInView } = useDayModeContext();

  const [menuOpen, setMenuOpen] = useState(true);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <StyledSocialFloater heroInView={heroInView}>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
        >
          <span
            className={`social-menu ${
              menuOpen ? 'slideOut' : 'slideIn'
            } social-menu--desktop`}
          >
            <span className='link-wrapper'>
              <Link passHref href='https://github.com/SilasCundiff'>
                <IconLink className='link-icon'>
                  <FiGithub />
                  <span className='link-icon--text'>GitHub</span>
                </IconLink>
              </Link>
            </span>
            <span className='link-wrapper'>
              <Link passHref href='https://www.linkedin.com/in/silascundiff/'>
                <IconLink className='link-icon'>
                  <RiLinkedinLine />
                  <span className='link-icon--text'>LinkedIn</span>
                </IconLink>
              </Link>
            </span>
            <span className='link-wrapper'>
              <Link passHref href='/extras/resume.pdf' download>
                <IconLink className='link-icon'>
                  <FiPaperclip />
                  <span className='link-icon--text'>Resume</span>
                </IconLink>
              </Link>
            </span>
            <span className='link-wrapper'>
              <Link passHref href='mailto:silvanusdesigns@gmail.com'>
                <IconLink className='link-icon'>
                  <HiOutlineMail />
                  <span className='link-icon--text'>Email</span>
                </IconLink>
              </Link>
            </span>
          </span>
          <Toggler handleToggle={handleToggle} menuOpen={menuOpen} />
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
