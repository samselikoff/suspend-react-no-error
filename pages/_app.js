import { suspend } from "suspend-react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  suspend(async () => {
    await fetch("http://api.foo.com/");
  }, []);

  return <p>hi</p>;
  // return <Component {...pageProps} />
}

export default MyApp;
