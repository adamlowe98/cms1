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
      <main className="container">
        <EntryHeader title="Content Management System" />
        <div className={style.layout}>
          <nav className={style.sidebar}>
            <ul>
              <li><Link href="/students">Students</Link></li>
              <li><Link href="/grades">Grades</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/reports">Reports</Link></li>
              <li><Link href="/attendance">Attendance</Link></li>
              <li><Link href="/settings">Settings</Link></li>
              <li><Link href="/users">Users</Link></li>
              <li><Link href="/notifications">Notifications</Link></li>
              <li><Link href="/analytics">Analytics</Link></li>
            </ul>
          </nav>
          <section className={style.content}>
            <h2>Manage Student Information</h2>
            <p>Here you can add, edit, or delete student records.</p>
            <h3>Add New Student</h3>
            <form>
              <input type="text" placeholder="Student Name" required />
              <input type="email" placeholder="Student Email" required />
              <button type="submit">Add Student</button>
            </form>
            <h2>Manage Grades</h2>
            <p>Input and track student grades for various courses.</p>
            <h3>Grade Submission</h3>
            <form>
              <input type="text" placeholder="Course Name" required />
              <input type="number" placeholder="Grade" required />
              <button type="submit">Submit Grade</button>
            </form>
            <h2>Manage Courses</h2>
            <p>Overview and management of available courses.</p>
            <h3>Add New Course</h3>
            <form>
              <input type="text" placeholder="Course Title" required />
              <input type="text" placeholder="Instructor Name" required />
              <button type="submit">Add Course</button>
            </form>
            <h2>Attendance Tracking</h2>
            <p>Record and manage student attendance.</p>
            <h3>Mark Attendance</h3>
            <form>
              <input type="text" placeholder="Student Name" required />
              <input type="date" required />
              <select>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
              <button type="submit">Mark Attendance</button>
            </form>
            <h2>Reports</h2>
            <p>Generate reports for student performance and attendance.</p>
            <button>Generate Report</button>
            <h2>User Management</h2>
            <p>Manage user accounts and permissions.</p>
            <h3>Add New User</h3>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="User Email" required />
              <button type="submit">Add User</button>
            </form>
            <h2>Notifications</h2>
            <p>Send notifications to students and staff.</p>
            <form>
              <textarea placeholder="Notification Message" required></textarea>
              <button type="submit">Send Notification</button>
            </form>
            <h2>Analytics</h2>
            <p>View analytics on student performance and engagement.</p>
            <button>View Analytics</button>
          </section>
        </div>
      </main>
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
