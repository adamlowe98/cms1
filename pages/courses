import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Courses(props) {
  const { title: siteTitle, description: siteDescription } = props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Courses</title>
      </Head>

      <Header siteTitle={siteTitle} siteDescription={siteDescription} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Course Management" />

        <section className={style.cardGrid}>
          <h3>Manage Courses</h3>
          <p>Here you can create, update, and delete courses.</p>
          {/* Additional course management features */}
        </section>
      </main>

      <Footer />
    </>
  );
}

Courses.query = gql`
  ${Header.fragments.entry}
  query GetCoursesPage {
    ...HeaderFragment
  }
`;
