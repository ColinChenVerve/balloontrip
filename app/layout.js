import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://volckano.com" />
    </head>
    <body suppressHydrationWarning>{children}</body>
  </html>
);

export default RootLayout;
