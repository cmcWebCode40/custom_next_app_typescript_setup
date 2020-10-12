/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../libs/apolloClient';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { Header } from '../components/';
import store from '../store';
import '../styles/globals.css';
import theme from '../theme';

interface PageProps {
  Component?: any;
  pageProps?: any;
}

const MyApp = ({ Component, pageProps }: PageProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState || null);
  return (
    <Fragment>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
