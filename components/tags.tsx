import { useMdxComponentsContext } from "../context/mdxContext";
import styles from "../styles/tags.module.css";

const useTags = () => {
  const tags = useMdxComponentsContext().tags;
  return (
    <>
      <ol className={styles.tags}>
        Tags:
        {tags.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ol>
      <hr className={styles.hr} />
    </>
  );
};

export default useTags;
