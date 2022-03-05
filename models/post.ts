import { ParsedUrlQuery } from "querystring";

export interface IPost {
  slug: string;
  date: string;
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Iparams extends ParsedUrlQuery {
  slug: string;
}
