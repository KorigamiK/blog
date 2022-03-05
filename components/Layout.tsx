type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
      <footer>
        <hr />
        <div id="bottom-nav">
          <p>© Copyright ·</p>
          <p>KorigamiK ·</p>
          <p>2022</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
