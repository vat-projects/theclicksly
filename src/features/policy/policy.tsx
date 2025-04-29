import { readdir } from "fs/promises";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPage(slug: string) {
  const text = await readFile(`./src/md/policies/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, shortDescription },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, body, shortDescription };
}

export async function getPageSlugs() {
  const files = await readdir("./src/md/policies/");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
