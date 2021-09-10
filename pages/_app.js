import { useState } from 'react';
import { DayModeProvider } from '@/contexts/DayModeContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { nightTheme, dayTheme } from '@/styles/ThemeConfig';
import { ParallaxProvider } from 'react-scroll-parallax';
function MyApp({ Component, pageProps }) {
  const [dayMode, setDayMode] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  const dayModeToggler = () => setDayMode(!dayMode);

  return (
    <DayModeProvider
      value={{ dayMode, dayModeToggler, heroInView, setHeroInView }}
    >
      <ThemeProvider theme={dayMode ? dayTheme : nightTheme}>
        <ParallaxProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </DayModeProvider>
  );
}

export default MyApp;
