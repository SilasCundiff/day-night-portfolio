import styled from 'styled-components';

const StyledItem = styled.div`
  border-radius: 5px;
  margin: 0.6rem 0;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
`;

const Item = ({ children, ...restProps }) => (
  <StyledItem {...restProps}>{children}</StyledItem>
);

export { Item };
