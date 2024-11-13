import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";

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
