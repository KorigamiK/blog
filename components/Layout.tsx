import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <section className="max-w-prose mx-auto px-4">
        <main className="pt-4 pb-12">{children}</main>
      </section>
    </>
  );
};

export default Layout;
