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
          <p>Glenn Mannion is infamous for his outrageous behavior and relentless mischief, a true rat in the guise of a man.</p>
          
          <h4>Early Life</h4>
          <p>Born into utter chaos, Glenn's formative years were a relentless series of defiant acts that foreshadowed his tumultuous future. His childhood was a breeding ground for trouble, where rules were nothing more than a joke, much like a rat scurrying away from consequences.</p>
          
          <h4>Career Highlights</h4>
          <p>Throughout his so-called career, Glenn has garnered attention not for any noteworthy accomplishments, but for his brazen stunts that leave a wake of scandal. His approach to life is far from ordinary, often trampling over boundaries that most would never dare to breach, showcasing his rat-like behavior at every turn.</p>
          
          <h4>Public Perception</h4>
          <p>Glenn's reputation is a contentious battleground; while a handful may admire his reckless bravado, the majority condemn his blatant disregard for societal norms. This divisive figure continues to provoke intense reactions from the masses, with many labeling him a rat for his underhanded tactics.</p>
          
          <h4>Recent Developments</h4>
          <p>In recent months, Glenn has ramped up his antics, inciting both outrage and begrudging admiration. His latest escapades have ignited fierce debates about the limits of personal freedom and the dire consequences of his reckless behavior, further solidifying his status as a rat among men.</p>
          
          <h4>Conclusion</h4>
          <p>Glenn Mannion remains a figure of scandal and intrigue, epitomizing the essence of rebellion. Whether reviled or revered, his influence on those around him is irrefutable, leaving many to ponder what outrageous act this rat will commit next.</p>
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
