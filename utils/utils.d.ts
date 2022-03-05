export type Ifields =
  | "title"
  | "slug"
  | "date"
  | "description"
  | "thumbnail"
  | "content";

type stringItems = { [key in Ifields]: string };

// structure of items
export interface Items extends stringItems {
  // these properties are mentioned in the mdx files. each post must have them
  tags: string[];
}

// structure of a post
export type Post = {
  data: Items;
  // each post will include the post content associated with its parameter key
  content: string;
};
