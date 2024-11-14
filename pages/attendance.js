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
export default function Attendance() {
  const { data } = useQuery(Attendance.query);

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Attendance</title>
      </Head>

      <Header menuItems={menuItems} />

      <nav className={style.verticalMenu}>
        <ul>
          <li><Link href="/students">Students</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/grades">Grades</Link></li>
          <li><Link href="/attendance">Attendance</Link></li>
        </ul>
      </nav>

      <main className="container">
        <EntryHeader title="Attendance Management" />
        <section className={style.cardGrid}>
          <h3>Manage Attendance</h3>
          <p>Here you can track and manage student attendance.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

Attendance.query = gql`
  ${Header.fragments.entry}
  query GetAttendancePage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Attendance,
  });
} 
