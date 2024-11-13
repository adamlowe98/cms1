import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Attendance(props) {
  const { title: siteTitle, description: siteDescription } = props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Attendance</title>
      </Head>

      <Header siteTitle={siteTitle} siteDescription={siteDescription} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Attendance Management" />

        <section className={style.cardGrid}>
          <h3>Manage Attendance</h3>
          <p>Here you can track and manage student attendance.</p>
          {/* Additional attendance management features */}
        </section>
      </main>

      <Footer />
    </>
  );
}
