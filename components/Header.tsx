import Link from "next/link";
import Image from "next/image";
type Props = { title?: string; href?: string };

// add the React Header Element
const Header: React.FC<Props> = ({ title = "Blog", href = "/" }) => {
  return (
    // header value
    <header className="head">
      <Link href={href}>
        <a id="page-title">{title}</a>
      </Link>
      <Image
        alt="korigamik"
        src={"/assets/crane-colored.png"}
        height={120}
        width={150}
      />
    </header>
  );
};

// export Header module
export default Header;
