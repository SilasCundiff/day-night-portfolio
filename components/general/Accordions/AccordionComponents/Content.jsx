import { useAccordionContext } from '../AccordionContext';
import styled from 'styled-components';

const StyledContent = styled.div`
  .wrapper {
    padding: clamp(0.2rem, 2vh, 1.5rem) clamp(0.6rem, 3vw, 2rem);
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    display: flex;
    flex-direction: column;
    line-height: 1.4;
  }
  .open {
    max-height: fit-content;
    opacity: 1;
    visibility: visible;
    transition: all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1),
      opacity 0.25s 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .close {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    padding: 0 clamp(0.6rem, 3vw, 2rem);
    transition: all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0s 0s;
  }
`;

const Content = ({ children, id, ...restProps }) => {
  const { activeId } = useAccordionContext();
  const active = activeId === id ? true : false;

  return (
    <StyledContent {...restProps}>
      <div className={`wrapper ${active ? 'open' : 'close'}`}>{children}</div>
    </StyledContent>
  );
};

export { Content };
