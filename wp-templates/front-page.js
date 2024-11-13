# Fix this headless app front page

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
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Headless CMS for Students</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <nav class="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><a href="students.js">Students</a></li>
                <li><a href="courses.js">Courses</a></li>
                <li><a href="grades.js">Grades</a></li>
                <li><a href="attendance.js">Attendance</a></li>
            </ul>
        </nav>
        <main class="content">
            <h1>Welcome to the Headless CMS</h1>
            <p>Select a feature from the navigation menu.</p>
        </main>
    </div>
</body>
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
   <div class="container">
        <nav class="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><a href="students.js">Students</a></li>
                <li><a href="courses.js">Courses</a></li>
                <li><a href="grades.js">Grades</a></li>
                <li><a href="attendance.js">Attendance</a></li>
            </ul>
        </nav>
        <main class="content">
            <h1>Welcome to the Headless CMS</h1>
            <p>Select a feature from the navigation menu.</p>
        </main>
    </div>
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
