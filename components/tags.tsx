import { useMdxComponentsContext } from "../context/mdxContext";

const useTags = () => {
  const tags = useMdxComponentsContext().tags;
  return (
    <>
      <h2>tags</h2>
      <ol>
        {tags.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ol>
    </>
  );
};

export default useTags;
