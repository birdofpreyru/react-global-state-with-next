import { GlobalStateProvider } from '@dr.pogodin/react-global-state';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp
