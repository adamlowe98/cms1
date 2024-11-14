import { gql, useQuery, useMutation } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";
import Link from "next/link";
import { useState } from "react";

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Students() {
  const { data } = useQuery(Students.query);
  const [studentName, setStudentName] = useState("");
  const [addStudent] = useMutation(ADD_STUDENT_MUTATION);

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  const handleAddStudent = async () => {
    if (studentName) {
      await addStudent({ variables: { name: studentName } });
      setStudentName("");
    }
  };

  return (
    <>
      <Head>
        <title>{siteTitle} - Students</title>
      </Head>

      <Header siteTitle={siteTitle} siteDescription={siteDescription} menuItems={menuItems} />

      <nav className={style.verticalMenu}>
        <ul>
          <li><Link href="/students">Students</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/grades">Grades</Link></li>
          <li><Link href="/attendance">Attendance</Link></li>
        </ul>
      </nav>

      <main className="container">
        <EntryHeader title="Student Management" />
        <section>
          <h3>Manage Students</h3>
          <p>Here you can add, edit, and delete student records.</p>
          <input 
            type="text" 
            value={studentName} 
            onChange={(e) => setStudentName(e.target.value)} 
            placeholder="Enter student name" 
          />
          <button onClick={handleAddStudent}>Add Student</button>
        </section>
      </main>

      <Footer />
    </>
  );
}

Students.query = gql`
  ${Header.fragments.entry}
  query GetStudentsPage {
    ...HeaderFragment
  }
`;

const ADD_STUDENT_MUTATION = gql`
  mutation AddStudent($name: String!) {
    addStudent(name: $name) {
      id
      name
    }
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Students,
  });
}
