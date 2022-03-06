import MetaHead from "./MetaHead";
import Social from "./Social";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      {MetaHead}
      {/* <body className="light"> */}
      <main>{children}</main>
      <footer>
        <Social />
        <hr />
        <div id="bottom-nav">
          <p>© Copyright ·</p>
          <p>KorigamiK ·</p>
          <p>2022</p>
        </div>
      </footer>
      {/* </body> */}
    </>
  );
};

export default Layout;
