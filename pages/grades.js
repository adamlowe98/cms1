import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";
import Link from "next/link";

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Grades() {
  const { data } = useQuery(Grades.query);

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Grades</title>
      </Head>

      <Header siteTitle={siteTitle} siteDescription={siteDescription} menuItems={menuItems} />

  <nav className={style.verticalMenu}>
        <ul>
          <li><Link href="/students">Students</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/grades">Grades</Link></li>
          <li><Link href="/attendance">Attendance</Link></li>
        </ul>
      </nav>

      <main className="container">
        <EntryHeader title="Grade Management" />
        <section className={style.cardGrid}>
          <h3>Manage Grades</h3>
          <p>Here you can input and modify student grades.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

Grades.query = gql`
  ${Header.fragments.entry}
  query GetGradesPage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Grades,
  });
}
