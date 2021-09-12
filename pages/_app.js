import { useState, useEffect } from 'react';
import { DayModeProvider } from '@/contexts/DayModeContext';
import { ModalProvider } from '@/contexts/ModalContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { nightTheme, dayTheme } from '@/styles/ThemeConfig';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  const [dayMode, setDayMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  const dayModeToggler = () => setDayMode(!dayMode);
  const modalToggler = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!modalOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  return (
    <DayModeProvider
      value={{ dayMode, dayModeToggler, heroInView, setHeroInView }}
    >
      <ModalProvider value={{ modalOpen, modalToggler }}>
        <ThemeProvider theme={dayMode ? dayTheme : nightTheme}>
          <ParallaxProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ParallaxProvider>
        </ThemeProvider>
      </ModalProvider>
    </DayModeProvider>
  );
}

export default MyApp;
