import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface Posts {
  title: string;
  body: number[];
}

interface PageProps {
  posts: Posts[];
}
interface QueryParams {
  value: string;
}

interface QueryParamsObj {
  query: QueryParams;
}

export default function About({ posts }: PageProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts}
      <main className={styles.main}>loremcjskdjckjskdcjksdjckjsdkcjk</main>
    </div>
  );
}

About.getInitialProps = async ({ query }: QueryParamsObj) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.value}`
  );
  await res.json();

  return About;
};
