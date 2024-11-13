import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

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
        <EntryHeader title="Welcome to the Student Management System" />

        <section className={style.cardGrid}>
          <Link
            href="school/students.html"
            className={style.card}
          >
            <h3>Students →</h3>
            <p>Manage student profiles, enrollment, and information.</p>
          </Link>

          <Link
            href="school/courses.html"
            className={style.card}
          >
            <h3>Courses →</h3>
            <p>View and manage available courses and their details.</p>
          </Link>

          <Link
            href="school/grades.html"
            className={style.card}
          >
            <h3>Grades →</h3>
            <p>Track and manage student grades and assessments.</p>
          </Link>

          <Link
            href="school/attendance.html"
            className={style.card}
          >
            <h3>Attendance →</h3>
            <p>Monitor and manage student attendance records.</p>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
