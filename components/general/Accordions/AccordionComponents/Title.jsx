import styled from 'styled-components';

const StyledTitle = styled.h4`
  font-weight: 300;
  padding: clamp(0.5rem, 2vh, 1rem) 0;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;

const Title = ({ children, ...restProps }) => (
  <StyledTitle {...restProps}>{children}</StyledTitle>
);

export { Title };
