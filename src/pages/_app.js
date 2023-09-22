import '@/styles/globals.css'
import Head from 'next/head'; // Import the Head component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other meta tags and head elements here */}
      </Head>
      <div className="bg-gray-800">
        <Component {...pageProps} />
      </div>
    </>
  );
}
