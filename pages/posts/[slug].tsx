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
import moment from "moment";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
  slug: string;
};

// components available to render in mdx files
const components = {
  Tags,
};

function convertDate(date_str: string) {
  const date = moment(date_str, "YYYY-MM-DD");
  return date.format("ddd MMMM Do, YYYY").toString();
}

const PostPage: React.FC<Props> = ({ source, frontMatter, slug }) => {
  const { setTags } = useMdxComponentsContext();
  const { title, description, thumbnail, date } = frontMatter;

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
          <br />
          <time dateTime={date}>{convertDate(date)}</time>
          <Tags />
          <h2>{description}</h2>

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
