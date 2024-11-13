import { gql } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/grades.module.css";

export default function Grades(props) {
  const { title: siteTitle } = props.data.generalSettings;

  return (
    <>
      <Head>
        <title>{siteTitle} - Grades</title>
      </Head>

      <Header siteTitle={siteTitle} />

      <main className="container">
        <h1>Grades Management</h1>
        <p>Track and update student grades efficiently.</p>
        {/* Add grade management functionalities here */}
      </main>

      <Footer />
    </>
  );
}

Grades.query = gql`
  query GetGradesPage {
    generalSettings {
      title
    }
  }
`;
