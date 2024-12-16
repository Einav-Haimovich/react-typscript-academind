import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { useEffect, useState } from "react";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>()

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);

      try {
        const data = (await get<RawDataBlogPost[]>(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[];

        const posts: BlogPost[] = data.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));
        setFetchedPosts(posts);
      } catch (error) {
        setError((error as Error).message)
      }
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <main>
        <img
          src={fetchingImg}
          alt="An abstract image depicting a data fetching process"
        />
        <ErrorMessage text={error} />
      </main>
    )
  }

  if (isFetching) {
    return (
      <main>
        <img
          src={fetchingImg}
          alt="An abstract image depicting a data fetching process"
        />
        <p id="loading-fallback">Fetching blog posts...</p>
      </main>
    );
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process"
      />
      <BlogPosts posts={fetchedPosts} />
    </main>
  );
}

export default App;
