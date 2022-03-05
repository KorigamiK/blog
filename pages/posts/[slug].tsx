import styles from "../../styles/post.module.css";

import { useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMdxComponentsContext } from "../../context/mdxContext";
import postUtils from "../../utils/mdxUtils";

import { Iparams, IPost } from "../../models/post";
import Thumbnail from "../../components/Thumbnail";
import Tags from "../../components/tags";
import Header from "../../components/Header";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
  slug: string;
};

// components available to render in mdx files
const components = {
  Tags,
};

const PostPage: React.FC<Props> = ({ source, frontMatter, slug }) => {
  const { setTags } = useMdxComponentsContext();
  const { title, description, thumbnail } = frontMatter;

  useEffect(() => {
    setTags(frontMatter.tags);
  }, [setTags, frontMatter.tags]);

  return (
    <>
      <Header title={title} href={slug} />

      <section className={styles.section}>
        <article className={styles.article}>
          <div className={styles.thumbnail}>
            <Thumbnail title={title} src={thumbnail} />
          </div>

          <Tags />

          <h3>{description}</h3>

          <MDXRemote components={components} {...source} />
        </article>
      </section>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
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
      slug: slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
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
