import Link from "next/link";
import Image from "next/image";
type Props = { title?: string; href?: string };

const Header: React.FC<Props> = ({ title = "Blog", href = "/" }) => {
  return (
    <header className="head">
      <Link href={href}>
        <a id="page-title">{title}</a>
      </Link>
      <Image
        alt="korigamik"
        src={"/assets/crane-colored.png"}
        className="crane-logo"
        height={140}
        width={190}
      />
    </header>
  );
};

export default Header;
