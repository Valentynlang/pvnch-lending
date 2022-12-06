import Script from 'next/script'
import "/styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src={"/scripts/pixel.js"}/>
      <Script src={"/scripts/tik-tok-pixel.js"}/>
      <Component {...pageProps} />
    </>
  );
}
