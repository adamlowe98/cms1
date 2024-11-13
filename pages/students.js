import { gql } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/students.module.css";

export default function Students(props) {
  const { title: siteTitle } = props.data.generalSettings;

  return (
    <>
      <Head>
        <title>{siteTitle} - Students</title>
      </Head>

      <Header siteTitle={siteTitle} />

      <main className="container">
        <h1>Students Management</h1>
        <p>Here you can manage student records, add new students, and edit existing ones.</p>
        {/* Add student management functionalities here */}
      </main>

      <Footer />
    </>
  );
}

Students.query = gql`
  query GetStudentsPage {
    generalSettings {
      title
    }
  }
`;
