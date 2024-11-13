import { gql } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/courses.module.css";

export default function Courses(props) {
  const { title: siteTitle } = props.data.generalSettings;

  return (
    <>
      <Head>
        <title>{siteTitle} - Courses</title>
      </Head>

      <Header siteTitle={siteTitle} />

      <main className="container">
        <h1>Courses Management</h1>
        <p>Manage course details, including adding, editing, and deleting courses.</p>
        {/* Add course management functionalities here */}
      </main>

      <Footer />
    </>
  );
}

Courses.query = gql`
  query GetCoursesPage {
    generalSettings {
      title
    }
  }
`;
