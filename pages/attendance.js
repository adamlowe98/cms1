import { gql } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/attendance.module.css";

export default function Attendance(props) {
  const { title: siteTitle } = props.data.generalSettings;

  return (
    <>
      <Head>
        <title>{siteTitle} - Attendance</title>
      </Head>

      <Header siteTitle={siteTitle} />

      <main className="container">
        <h1>Attendance Management</h1>
        <p>Record and monitor student attendance effectively.</p>
        {/* Add attendance management functionalities here */}
      </main>

      <Footer />
    </>
  );
}

Attendance.query = gql`
  query GetAttendancePage {
    generalSettings {
      title
    }
  }
`;
