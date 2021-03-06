import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    console.log(pageProps);

  return (
    <Layout>
      <Component pageProps={pageProps} />
    </Layout>
  );
}

export default MyApp
