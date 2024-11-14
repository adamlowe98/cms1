import { gql, useQuery, useMutation } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Students() {
  const { data } = useQuery(Students.query);
  const [addStudent] = useMutation(ADD_STUDENT_MUTATION);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    parentContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent({ variables: { ...formData } });
    // Reset form or handle success
  };

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Students</title>
      </Head>

      <Header menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Student Management" />

        <nav className={style.fancyMenu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/students">Students</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/grades">Grades</Link></li>
            <li><Link href="/attendance">Attendance</Link></li>
            <li><Link href="/glenn-mannion">Glenn Mannion</Link></li>
          </ul>
        </nav>

        <div className={style.container}>
          <section className={style.formSection}>
            <h3>Manage Students</h3>
            <p>Here you can add, edit, and delete student records.</p>
            <form onSubmit={handleSubmit} className={style.studentForm}>
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" onChange={handleChange} />
              <input type="date" name="dateOfBirth" onChange={handleChange} required />
              <input type="text" name="grade" placeholder="Grade" onChange={handleChange} required />
              <input type="text" name="parentName" placeholder="Parent's Name" onChange={handleChange} />
              <input type="tel" name="parentContact" placeholder="Parent's Contact" onChange={handleChange} />
              <button type="submit">Add Student</button>
            </form>
          </section>

          <section className={style.tableSection}>
            <h3>Student List</h3>
            <table className={style.studentTable}>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {data.students && data.students.map(student => (
                  <tr key={student.id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

Students.query = gql`
  ${Header.fragments.entry}
  query GetStudentsPage {
    ...HeaderFragment
    students {
      id
      firstName
      lastName
      email
      phone
      grade
    }
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Students,
  });
}

const ADD_STUDENT_MUTATION = gql`
  mutation AddStudent($firstName: String!, $lastName: String!, $email: String!, $phone: String, $address: String, $dateOfBirth: String!, $grade: String!, $parentName: String, $parentContact: String) {
    addStudent(input: { firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, address: $address, dateOfBirth: $dateOfBirth, grade: $grade, parentName: $parentName, parentContact: $parentContact }) {
      student {
        id
        firstName
        lastName
      }
    }
  }
`;
