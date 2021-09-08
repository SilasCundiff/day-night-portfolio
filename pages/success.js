import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';
const StyledSuccess = styled.div`
  & div {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
  }
  & h1,
  h3 {
    color: ${({ theme: { secondary } }) => secondary};
    text-align: center;
  }
  & h3 {
    margin-top: 2vh;
  }
  & a {
    color: ${({ theme: { secondary } }) => secondary};
    font-size: 1.75rem;
    text-decoration: none;
    display: flex;
    font-weight: ${({ theme: { thin } }) => thin};
    margin: 2rem auto;
    & svg {
      margin: auto auto auto 1rem;
    }
  }
`;
function Success() {
  const { dayMode } = useDayModeContext();
  return (
    <StyledSuccess>
      <div>
        <IconContext.Provider
          value={{ color: `${dayMode ? '#C7273F' : '#11A9E6'}` }}
        >
          <h1>Message Received!</h1>
          <h3>I&apos;ll respond soon, until then! </h3>
          <Link href='/'>
            <a>
              Return To <FiHome />
            </a>
          </Link>
        </IconContext.Provider>
      </div>
    </StyledSuccess>
  );
}
export default Success;
