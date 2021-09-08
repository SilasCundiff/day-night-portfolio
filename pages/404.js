import styled from 'styled-components';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useDayModeContext } from '@/contexts/DayModeContext';
const StyledPageNotFound = styled.div`
  .PageNotFound__heading {
    margin-top: 10vh;

    & h1,
    h3 {
      color: ${({ theme: { secondary } }) => secondary};
      text-align: center;
    }

    & h3 {
      font-size: 1.75rem;
      margin-top: 2vh;
    }
  }
  .PageNotFound__body {
    margin-top: 5vh;
    padding: 5%;
    & p {
      font-size: 1.25rem;
      margin-bottom: 2vh;
    }
    & a {
      color: ${({ theme: { secondary } }) => secondary};
      font-size: 1.75rem;
      text-decoration: none;
      display: flex;

      font-weight: ${({ theme: { thin } }) => thin};
      & svg {
        margin: auto auto auto 1rem;
      }
    }
  }
`;

function PageNotFound() {
  const { dayMode } = useDayModeContext();
  return (
    <StyledPageNotFound>
      <div className='PageNotFound__heading'>
        <h1>Whoa there!</h1>
        <h3>This page doesn&apos;t exist</h3>
      </div>
      <div className='PageNotFound__body'>
        <p>While I love a good adventure, this site only has a homepage!</p>
        <p></p>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
        >
          <Link href='/'>
            <a>
              Go To <FiHome />
            </a>
          </Link>
        </IconContext.Provider>
      </div>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
