import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars
} from '../components/Dashboard';
import { initializeApollo } from '../libs/apolloClient';

const DashBoard = (): JSX.Element => {
  return <PostList />;
};

interface StaticProps {
  props: {
    initialApolloState: () => void;
  };
  revalidate: number;
}

export async function getStaticProps(): Promise<StaticProps> {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default DashBoard;
