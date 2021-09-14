import styled from 'styled-components';

const StyledContainer = styled.div``;

const Container = ({ children, ...restProps }) => (
  <StyledContainer {...restProps}>{children}</StyledContainer>
);

export { Container };
