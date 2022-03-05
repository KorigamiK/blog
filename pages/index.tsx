import Thumbnail from "../components/Thumbnail";
import type { NextPage, GetStaticProps } from "next";
import { IPost } from "../models/post";
import Link from "next/link";
import postUtils from "../utils/mdxUtils";
import Header from "../components/Header";

type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <Header />

      <section>
        <h1>Posts</h1>

        <div>
          {posts.map((post) => (
            <article key={post.slug}>
              <div className="mb-4">
                <Thumbnail
                  slug={post.slug}
                  title={post.title}
                  src={post.thumbnail}
                />
              </div>

              <h2 className="text-2xl font-bold mb-4">
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>

              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = postUtils.getAllPosts([
    "title",
    "slug",
    "date",
    "description",
    "thumbnail",
    "tags",
  ]);

  return { props: { posts } };
};
