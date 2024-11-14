import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";
import Link from "next/link";

export default function GlennMannion() {
  const { data } = useQuery(GlennMannion.query);

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Glenn Mannion</title>
      </Head>

      <Header menuItems={menuItems} />
    
      <main className="container">
        <EntryHeader title="Glenn Mannion: The Bad Boy" />

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
    
        <section className={style.cardGrid}>
    <h3>About Glenn Mannion</h3>
    <p>Glenn Mannion is known for his notorious behavior and mischievous antics.</p>
    
    <h4>Early Life</h4>
    <p>Born into a world of chaos, Glenn's early years were marked by a series of rebellious acts that set the tone for his future. His childhood was a playground for trouble, where rules were merely suggestions.</p>
    
    <h4>Career Highlights</h4>
    <p>Throughout his career, Glenn has made headlines not for his achievements, but for his audacious stunts that often leave a trail of controversy. His approach to life is anything but conventional, often pushing boundaries that most would dare not cross.</p>
    
    <h4>Public Perception</h4>
    <p>Glenn's reputation is a double-edged sword; while some admire his fearless attitude, others criticize his lack of regard for societal norms. This polarizing figure continues to evoke strong reactions from the public.</p>
    
    <h4>Recent Developments</h4>
    <p>In recent months, Glenn has escalated his antics, drawing both ire and admiration. His latest escapades have sparked debates about the limits of personal freedom and the consequences of reckless behavior.</p>
    
    <h4>Conclusion</h4>
    <p>Glenn Mannion remains a figure of intrigue and controversy, embodying the spirit of rebellion. Whether loved or loathed, his impact on those around him is undeniable, leaving many to wonder what he will do next.</p>
</section>
      </main>

      <Footer />
    </>
  );
}

GlennMannion.query = gql`
  ${Header.fragments.entry}
  query GetGlennMannionPage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: GlennMannion,
  });
}
