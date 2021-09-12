import { useEffect } from 'react';
import styled from 'styled-components';
import { useModalContext } from '@/contexts/ModalContext';
import { useDayModeContext } from '@/contexts/DayModeContext';
import Container from '../Container';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  & .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0.5rem;
    cursor: pointer;
    svg {
      font-size: clamp(1.8rem, 2vw, 4rem);
    }
  }
  & .modal--container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .modal--wrapper {
    position: relative;
    height: 85vh;
    width: 95vw;
    overflow-y: auto;
    display: flex;
    border-radius: 0.5rem;
    background: ${({ theme: { secondary } }) => secondary};
  }

  @media only screen and (min-width: 1280px) {
    & .modal--container {
      height: 100vh;
      width: 90vw;
    }
    & .modal--wrapper {
      height: min(85vh, 1080px);
      width: min(100%, 1680px);
    }
  }
`;

function Modal({ children }) {
  const { dayMode } = useDayModeContext();
  const { modalToggler } = useModalContext();

  return (
    <StyledModal onClick={modalToggler}>
      <Container className='modal--container'>
        <span className='close-icon'>
          <IconContext.Provider
            value={{ color: `${dayMode ? '#FFE9DC' : '#BAEBFF'}` }}
          >
            <FaTimes onClick={modalToggler} />
          </IconContext.Provider>
        </span>
        <div className='modal--wrapper' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </Container>
    </StyledModal>
  );
}

export default Modal;
