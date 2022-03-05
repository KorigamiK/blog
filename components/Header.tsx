import Link from "next/link";

type Props = { title?: string; href?: string };

// add the React Header Element
const Header: React.FC<Props> = ({ title = "Blog", href = "/" }) => {
  return (
    // header value
    <header className="head">
      <Link href={href}>
        <a className="title">{title}</a>
      </Link>
    </header>
  );
};

// export Header module
export default Header;
