import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { nightTheme, dayTheme } from '@/styles/ThemeConfig';

function MyApp({ Component, pageProps }) {
  const [dayMode, setDayMode] = useState(false);

  const dayModeToggler = () => setDayMode(!dayMode);
  return (
    <>
      <ThemeProvider theme={dayMode ? dayTheme : nightTheme}>
        <GlobalStyle />
        <Component
          {...pageProps}
          dayModeToggler={dayModeToggler}
          dayMode={dayMode}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
