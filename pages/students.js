import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export default function Students() {
  const { data } = useQuery(Students.query);
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [addStudent] = useMutation(ADD_STUDENT_MUTATION);

  const handleAddStudent = async () => {
    await addStudent({ variables: { name: studentName, age: studentAge } });
    setStudentName("");
    setStudentAge("");
  };

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

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
          <form onSubmit={(e) => { e.preventDefault(); handleAddStudent(); }}>
            <input 
              type="text" 
              placeholder="Student Name" 
              value={studentName} 
              onChange={(e) => setStudentName(e.target.value)} 
              required 
            />
            <input 
              type="number" 
              placeholder="Student Age" 
              value={studentAge} 
              onChange={(e) => setStudentAge(e.target.value)} 
              required 
            />
            <button type="submit">Add Student</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

const ADD_STUDENT_MUTATION = gql`
  mutation AddStudent($name: String!, $age: Int!) {
    addStudent(input: { name: $name, age: $age }) {
      student {
        id
        name
        age
      }
    }
  }
`;

Students.query = gql`
  ${Header.fragments.entry}
  query GetStudentsPage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Students,
  });
}
