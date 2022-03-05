import { useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMdxComponentsContext } from "../../context/mdxContext";
import postUtils from "../../utils/mdxUtils";

import { Iparams, IPost } from "../../models/post";
import Thumbnail from "../../components/Thumbnail";
import Tags from "../../components/tags";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

// components available to render in mdx files
const components = {
  Tags,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }) => {
  // get setters
  const { setTags } = useMdxComponentsContext();
  const { title, description, thumbnail } = frontMatter;

  // set tags
  useEffect(() => {
    setTags(frontMatter.tags);
  }, [setTags, frontMatter.tags]);

  return (
    <div>
      <article className="prose prose-green">
        <div className="mb-4">
          <Thumbnail title={title} src={thumbnail} />
        </div>

        <h1>{title}</h1>

        <p>{description}</p>

        <MDXRemote components={components} {...source} />
      </article>
    </div>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  // get the slug
  const { slug } = context.params as Iparams;
  const { content, data } = postUtils.getPost(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, {
    scope: data as unknown as Record<string, unknown>,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  // only get the slug from posts
  const posts = postUtils.getAllPosts(["slug"]);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
