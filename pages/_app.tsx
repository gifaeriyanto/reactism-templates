import { AppProps } from 'next/app';
import React from 'react';
import './global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
