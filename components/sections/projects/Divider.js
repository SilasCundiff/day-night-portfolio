import styled from 'styled-components';

const StyledDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 5%;
  margin-bottom: 20vh;
  background: ${({ theme: { gradient } }) => gradient};
  @media only screen and (min-width: 1280px) {
    height: 45vh;
    padding: 5% 10%;
  }
`;

function Divider({ children }) {
  return <StyledDivider>{children}</StyledDivider>;
}

export default Divider;
