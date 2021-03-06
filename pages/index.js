import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import AboutMe from "../components/AboutMe";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>The Coding Wizard || Blog</title>
      </Head>

      <AboutMe />

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //Get the files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    //Get front matter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
