import { useMdxComponentsContext } from "../context/mdxContext";
import styles from "../styles/tags.module.css";

const useTags = () => {
  const tags = useMdxComponentsContext().tags;
  return (
    <>
      <ol className={styles.tags}>
        <p>Tags:</p>
        {tags.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ol>
    </>
  );
};

export default useTags;
