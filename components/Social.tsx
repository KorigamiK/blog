import Link from "next/link";
import styles from "../styles/social.module.css";
import Icon from "./Icon";

type Props = {};

const getSocial = ({
  name,
  href = "/",
  key,
}: {
  name: string;
  href: string;
  key: number;
}) => (
  <Link key={key} href={href} passHref>
    <li>
      <Icon name={name} href={href} />
      <span>{name}</span>
    </li>
  </Link>
);

const socials = [
  { name: "GitHub", href: "https://github.com/KorigamiK/", key: 1 },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCjRUPtazksXJuLQbNM_x13g",
    key: 2,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kushagra-lakhwani-1ab69022a/",
    key: 3,
  },
  { name: "Gmail", href: "mailto:korigamik@gmail.com", key: 4 },
];

const Social: React.FC<Props> = ({}) => {
  return (
    <nav className={styles.nav}>
      <ul id={styles.social}>
        {socials.map((value, index) => getSocial(value))}
      </ul>
    </nav>
  );
};

export default Social;
