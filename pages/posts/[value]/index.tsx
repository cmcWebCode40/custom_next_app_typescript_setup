import Head from 'next/head';

interface QueryParams {
  query: string;
}

// interface QueryParamsObj {
//   query: QueryParams;
// }

export default function About(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>loremcjskdjckjskdcjksdjckjsdkcjk</main>
    </div>
  );
}

About.getInitialProps = async (query: QueryParams) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${query}`
    );
  } catch (error) {}

  return About;
};
