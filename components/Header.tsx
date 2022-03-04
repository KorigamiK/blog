import Link from "next/link";

// add the React Header Element
const Header: React.FC = () => {
  return (
    // header value
    <header className="head">
      <Link href="/">
        <a className="text-2xl font-bold text-green-500">Blog</a>
      </Link>
    </header>
  );
};

// export Header module
export default Header;
