import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../common/Layout';
import store from '../store'; // Import your Redux store
import '../styles/globals.css'; // Import global styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
