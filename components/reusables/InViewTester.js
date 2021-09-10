import styled from 'styled-components';

const StyledInViewTester = styled.div`
  position: fixed;
  bottom: 5%;
  left: 2%;

  z-index: 5000;
  background: rgba(0, 0, 0, 1);
  border-radius: 5px;
  padding: 0.5rem;
  width: 60px;
  text-align: center;
  & p {
    font-size: 3rem;
  }
  ${({ inView }) => (inView ? 'color: #2DD4BF' : 'color: #FB7185')};
`;

function InViewTester({ inView, label }) {
  console.log(`${label} is in view?`, inView);
  return (
    <StyledInViewTester inView={inView}>
      {inView ? <p>&#x2714;</p> : <p>&#10006;</p>}
      <span>{label}</span>
    </StyledInViewTester>
  );
}

export default InViewTester;
