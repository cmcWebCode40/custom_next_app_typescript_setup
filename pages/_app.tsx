/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Header } from '../components/';
import '../styles/globals.css';
import theme from '../theme';

interface PageProps {
  Component?: any;
  pageProps?: any;
}

const MyApp = ({ Component, pageProps }: PageProps): JSX.Element => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
};

export default MyApp;
