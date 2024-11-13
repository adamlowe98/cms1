import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function CMSComponent(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const posts = props.data.posts.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title="Welcome to the Content Management System" />

        <section className={style.cardGrid}>
          {posts.map(post => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className={style.card}
            >
              <h3>{post.title} →</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

CMSComponent.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
    posts {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`;
