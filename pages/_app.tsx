import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { MdxComponentsProvider } from "../context/mdxContext";
import "../styles/colors.css";
import "../styles/globals.css";
import "../styles/prism.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
}

export default MyApp;
