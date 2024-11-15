import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function StudentTable() {
  const { data, loading, error } = useQuery(GET_STUDENTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Head>
        <title>Student Table</title>
      </Head>

      <Header />

      <main className="container">
        <h3>Student Records</h3>
        <table className={style.studentTable}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Grade</th>
              <th>Parent's Name</th>
              <th>Parent's Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.getStudents.map(student => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.grade}</td>
                <td>{student.parentName}</td>
                <td>{student.parentContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer />
    </>
  );
}

const GET_STUDENTS_QUERY = gql`
  query GetStudents {
    getStudents {
      id
      firstName
      lastName
      email
      phone
      address
      dateOfBirth
      grade
      parentName
      parentContact
    }
  }
`;
