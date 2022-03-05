import {
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";

type ContextProps = {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  title?: string;
};

type Props = {
  children: ReactNode;
};

const MdxComponentsContext = createContext({} as ContextProps);

export function MdxComponentsProvider({ children }: Props): ReactElement {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <MdxComponentsContext.Provider
      value={{
        tags,
        setTags,
      }}
    >
      {children}
    </MdxComponentsContext.Provider>
  );
}

export function useMdxComponentsContext(): ContextProps {
  return useContext(MdxComponentsContext);
}
