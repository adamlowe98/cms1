import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Home(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Student Management System" />

        <div className="fancyMenu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/grades">Grades</a></li>
            <li><a href="/attendance">Attendance</a></li>
          </ul>
        </div>

        <section className={style.cardGrid}>
          <Link href="/students" className={style.card}>
            <h3>Manage Students →</h3>
            <p>Access and manage student information.</p>
          </Link>

          <Link href="/courses" className={style.card}>
            <h3>Manage Courses →</h3>
            <p>View and edit course details.</p>
          </Link>

          <Link href="/grades" className={style.card}>
            <h3>Manage Grades →</h3>
            <p>Track and update student grades.</p>
          </Link>

          <Link href="/attendance" className={style.card}>
            <h3>Manage Attendance →</h3>
            <p>Record and monitor student attendance.</p>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

Home.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
