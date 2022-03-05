import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import { Items, Post } from "./utils";

export default class postUtils {
  // path to our list of available posts
  private static POSTS_PATH = join(process.cwd(), "_posts");
  private static MDX_REGEX = /\.mdx?$/;

  private static get getPostFilePaths(): Array<string> {
    return fs
      .readdirSync(this.POSTS_PATH)
      .filter((path) => this.MDX_REGEX.test(path));
  }

  static getPost(slug: String): Post {
    const fullPath = join(this.POSTS_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    // returns the front matter data and content
    const { data, content } = matter(fileContents);
    return { data, content } as Post;
  }

  private static getPostItems(
    filePath: string,
    fields: Array<keyof Items> = []
  ): Items {
    // fields queried from the client side
    // create slug from filePath
    const slug = filePath.replace(this.MDX_REGEX, "");
    const { data, content } = this.getPost(slug);
    const items = <Items>{};

    for (const field of fields) {
      switch (field) {
        case "slug":
          items[field] = slug;
          break;
        case "content":
          items[field] = content;
          break;
        case "tags":
          items["tags"] = data[field];
          break;
        default:
          // verify that the field is not empty
          if (data[field]) items[field] = data[field];
          break;
      }
    }
    return items;
  }

  static getAllPosts(fields: (keyof Items)[]): Items[] {
    const posts = this.getPostFilePaths
      .map((filePath) => this.getPostItems(filePath, fields))
      .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
    return posts;
  }
}
