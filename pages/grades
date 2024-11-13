import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Grades(props) {
  const { title: siteTitle, description: siteDescription } = props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Grades</title>
      </Head>

      <Header siteTitle={siteTitle} siteDescription={siteDescription} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Grade Management" />

        <section className={style.cardGrid}>
          <h3>Manage Grades</h3>
          <p>Here you can input and modify student grades.</p>
          {/* Additional grade management features */}
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
