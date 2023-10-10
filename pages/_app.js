import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Balloon Trip</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/balloontrip.png" />
      <link rel="preconnect" href="https://volckano.com" />
      <meta
        name="description"
        content="Volckano is dedicated to the development of applications, games, and websites."
      />
      <meta
        name="keywords"
        content="mobile app development, mobile game development, AI app development"
      />
      <meta name="author" content="Volckano" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.volckano.com" />
      <meta property="og:url" content="https://www.volckano.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Volckano" />
      <meta
        property="og:description"
        content="Volckano is dedicated to the development of applications, games, and websites."
      />
      <meta property="og:image" content="/images/volckanosocialmedia.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
