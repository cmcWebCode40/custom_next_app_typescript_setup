/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Fragment } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../libs/apolloClient';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';
import theme from '../theme/theme';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState || null);
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <CssBaseline />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
