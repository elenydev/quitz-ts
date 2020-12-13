import Layout from '../layout/Layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
