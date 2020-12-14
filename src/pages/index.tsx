import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Quiz app</title>
    </Head>
    <Link href="/quiz">
      <Button variant="contained" color="secondary">
        Start
      </Button>
    </Link>
  </>
);

export default Home;
