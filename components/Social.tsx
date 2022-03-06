import Link from "next/link";
import styles from "../styles/social.module.css";
import Icon from "./Icon";

type Props = {};

const getSocial = ({ name, href = "/" }: { name: string; href: string }) => (
  <Link href={href} passHref>
    <li>
      <span>{name}</span>
      <Icon name={name} href={href} />
    </li>
  </Link>
);

const socials = [
  { name: "GitHub", href: "https://github.com/KorigamiK/" },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCjRUPtazksXJuLQbNM_x13g",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kushagra-lakhwani-1ab69022a/",
  },
  { name: "Gmail", href: "mailto:korigamik@gmail.com" },
];

const Social: React.FC<Props> = ({}) => {
  return (
    <nav className={styles.nav}>
      <ul id={styles.social}>{socials.map((value) => getSocial(value))}</ul>
    </nav>
  );
};

export default Social;
