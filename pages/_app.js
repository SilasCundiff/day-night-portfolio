import { useState } from 'react';
import { DayModeProvider } from '@/contexts/DayModeContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { nightTheme, dayTheme } from '@/styles/ThemeConfig';

function MyApp({ Component, pageProps }) {
  const [dayMode, setDayMode] = useState(false);

  const dayModeToggler = () => setDayMode(!dayMode);

  return (
    <DayModeProvider value={{ dayMode, dayModeToggler }}>
      <ThemeProvider theme={dayMode ? dayTheme : nightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </DayModeProvider>
  );
}

export default MyApp;
