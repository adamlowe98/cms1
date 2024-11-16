import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";
import Link from "next/link";

export default function MusicPlayer() {
  const { data, loading, error } = useQuery(MusicPlayer.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;
  const mp3Files = data.mp3Files || []; // Ensure mp3Files is defined

  return (
    <>
      <Head>
        <title>{siteTitle} - Music Player</title>
      </Head>

      <Header menuItems={menuItems} />
    
      <main className="container">
        <EntryHeader title="Music Player" />

        <nav className={style.fancyMenu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/students">Students</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/grades">Grades</Link></li>
            <li><Link href="/attendance">Attendance</Link></li>
            <li><Link href="/music-player">Music Player</Link></li>
          </ul>
        </nav>
    
        <section className={style.cardGrid}>
          {mp3Files.map((file) => (
            <div key={file.id} className={style.card}>
              <img src={file.thumbnail} alt={`${file.title} thumbnail`} />
              <h4>{file.title}</h4>
              <p>{file.artist}</p>
              <audio controls>
                <source src={file.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </>
  );
}

MusicPlayer.query = gql`
  query GetMusicPlayerPage {
    generalSettings {
      title
      description
    }
    primaryMenuItems {
      nodes {
        id
        title
        url
      }
    }
    mp3Files {
      id
      title
      artist
      url
      thumbnail
    }
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: MusicPlayer,
  });
}
