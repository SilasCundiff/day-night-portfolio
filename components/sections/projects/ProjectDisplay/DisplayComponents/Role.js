import styled from 'styled-components';

const StyledRole = styled.div`
  font-size: calc(18px + (30 - 18) * ((100vw - 300px) / (1920 - 300)));
  margin-bottom: 2rem;
`;

export const Role = ({ children }) => <StyledRole>{children}</StyledRole>;
