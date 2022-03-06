import Head from "next/head";

const SEO = {
  title: "Blog | KorigamiK",
  description: "This is the personal blog of the renowned KorigamiK himself!",
  type: "website",
  image: "https://blog-korigamik.vercel.app/assets/crane-colored.png",
  url: "https://blog-korigamik.vercel.app/",
  keywords: "blog korigamik",
};

const MetaHead = (
  <Head>
    <title key="title">{SEO.title}</title>
    <meta name="description" key="description" content={SEO.description} />
    <meta name="og:type" key="og:type" content={SEO.type} />
    <meta name="og:title" key="og:title" content={SEO.title} />
    <meta
      name="og:description"
      key="og:description"
      content={SEO.description}
    />
    <meta name="og:url" key="og:url" content={SEO.url} />
    <meta name="og:image" key="og:image" content={SEO.image} />
    <meta name="og:keywords" key="og:keywords" content={SEO.keywords} />
    <link rel="icon" type="image/svg+xml" href="/assets/crane-colored.png" />
  </Head>
);
export default MetaHead;
