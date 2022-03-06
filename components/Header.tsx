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
        height={120}
        width={150}
      />
    </header>
  );
};

export default Header;
