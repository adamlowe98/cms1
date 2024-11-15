import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Students({ menuItems }) {
  const [students, setStudents] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, { id: students.length + 1, ...formData }]);
    setFormData({
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
  };

  return (
    <>
      <Head>
        <title>Students Management</title>
      </Head>

      <Header menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Student Management" />

        <nav className="fancyMenu">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/students">Students</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/grades">Grades</Link></li>
            <li><Link href="/attendance">Attendance</Link></li>
            <li><Link href="/glenn-mannion">Glenn Mannion</Link></li>
          </ul>
        </nav>

        <div className="container">
          <section className="formSection">
            <h3>Manage Students</h3>
            <p>Here you can add, edit, and delete student records.</p>
            <form onSubmit={handleSubmit} className="studentForm">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
              <input type="text" name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} required />
              <input type="text" name="parentName" placeholder="Parent's Name" value={formData.parentName} onChange={handleChange} />
              <input type="tel" name="parentContact" placeholder="Parent's Contact" value={formData.parentContact} onChange={handleChange} />
              <button type="submit">Add Student</button>
            </form>
          </section>

          <section className="tableSection">
            <h3>Student List</h3>
            <table className="studentTable">
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
                {students.map(student => (
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

export function getStaticProps(ctx) {
  return {
    props: {
      menuItems: [
        { title: "Home", url: "/" },
        { title: "Students", url: "/students" },
        { title: "Courses", url: "/courses" },
        { title: "Grades", url: "/grades" },
        { title: "Attendance", url: "/attendance" },
        { title: "Glenn Mannion", url: "/glenn-mannion" },
      ],
    },
  };
}
