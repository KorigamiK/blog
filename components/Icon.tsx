import Image from "next/image";
import Link from "next/link";

type Props = { name: string; href: string; width?: number; height?: number };

const Icon: React.FC<Props> = ({ name, href, width = 30, height = 30 }) => {
  return (
    <Link href={href}>
      <a className="icon" style={{ textAlign: "center" }}>
        <Image
          alt={name}
          src={`https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${name.toLowerCase()}.svg`}
          height={height}
          width={width}
        />
      </a>
    </Link>
  );
};

export default Icon;
