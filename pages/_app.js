import { Header } from "/components/header/Header.jsx";
import { Footer } from "/components/footer/Footer.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
