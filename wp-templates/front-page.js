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
      <div className={style.container}>
        <Header />
        <nav className={style.sideNav}>
          <ul>
            <li><Link href="/students">Students</Link></li>
            <li><Link href="/grades">Grades</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/reports">Reports</Link></li>
            <li><Link href="/settings">Settings</Link></li>
          </ul>
        </nav>
        <main className={style.mainContent}>
          <EntryHeader title="Student Information Management" />
          <section>
            <h2>Manage Students</h2>
            <p>Add, edit, or remove student information.</p>
            {/* Student management functionality goes here */}
          </section>
          <section>
            <h2>Manage Grades</h2>
            <p>Input and track student grades.</p>
            {/* Grade management functionality goes here */}
          </section>
          <section>
            <h2>Manage Courses</h2>
            <p>Overview of courses offered.</p>
            {/* Course management functionality goes here */}
          </section>
          <section>
            <h2>Generate Reports</h2>
            <p>Generate performance reports for students.</p>
            {/* Report generation functionality goes here */}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
