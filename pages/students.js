import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";


/**
 * Next.js file based page example with Faust helpers.
 */
export default function Students() {
  const { data } = useQuery(Students.query);

  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Students</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

           <nav className={style.verticalMenu}>
        <ul>
          <li><Link href="/students">Students</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/grades">Grades</Link></li>
          <li><Link href="/attendance">Attendance</Link></li>
        </ul>
      </nav>

      <main className="container">
        <EntryHeader title="Student Management" />
        <section>
          <h3>Manage Students</h3>
          <p>Here you can add, edit, and delete student records.</p>
          {/* Additional student management features */}
        </section>
      </main>

      <Footer />
    </>
  );
}

Students.query = gql`
  ${Header.fragments.entry}
  query GetStudentsPage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Students,
  });
}
