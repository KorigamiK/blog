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
  const getTitle = (post: IPost) => (
    <h4 key={post.slug + "title"}>
      <Link href={`/posts/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
      <p className="post-date">{post.date}</p>
    </h4>
  );

  const getContent = (post: IPost) => (
    <div key={post.slug + "content"}>
      <div>
        <Thumbnail
          slug={post.slug}
          title={post.title}
          src={post.thumbnail}
          height={120}
          width={210}
        />
      </div>

      <p>{post.description}</p>
    </div>
  );

  const postContent = (post: IPost) => [
    getTitle(post),
    <div key={post.slug + "circle"} className="circle" />,
    getContent(post),
  ];

  return (
    <>
      <Header />

      <section>
        <h1 className="posts-text">Posts</h1>

        <div id="posts">
          <div id="timeline" />
          {posts.map((post, idx) => (
            <article key={post.slug}>
              {idx % 2 ? postContent(post) : postContent(post).reverse()}
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
