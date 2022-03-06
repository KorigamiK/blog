import { useMdxComponentsContext } from "../context/mdxContext";
import styles from "../styles/tags.module.css";

const useTags = () => {
  const tags = useMdxComponentsContext().tags;
  return (
    <>
      <h4>
        <u>Tags:</u>
      </h4>
      <ol className={styles.tags}>
        {tags.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ol>
    </>
  );
};

export default useTags;
