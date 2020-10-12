import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setValue } from '../libs/slices/sampleSlice';

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: { createdAt: desc }, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: 10
};

interface Post {
  id: string;
  title: string;
  url: string;
  votes: string;
}

export default function PostList(): JSX.Element {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true
    }
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setValue(data));
  //   }
  // }, [data]);
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: allPosts.length
      }
    });
  };

  if (error) return <h1>Error</h1>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const { allPosts, _allPostsMeta } = data;
  const areMorePosts = allPosts.length < _allPostsMeta.count;

  return (
    <section>
      <ul>
        {allPosts.map((post: Post, index: number) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
              {post.id}
              {post.votes}
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )}
    </section>
  );
}
