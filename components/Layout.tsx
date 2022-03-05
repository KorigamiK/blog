type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <main className="pt-4 pb-12">{children}</main>
    </>
  );
};

export default Layout;
