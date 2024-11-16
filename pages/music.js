import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import style from "../styles/front-page.module.css";
import Link from "next/link";


  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;
 
  return (
    <>
      <Head>
        <title>{siteTitle} - RatPack Music</title>
      </Head>

      <Header menuItems={menuItems} />
    
      <main className="container">
        <EntryHeader title="The RatPack Music" />

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
    
       const musicFiles = [
  { name: 'Song 1', src: 'path/to/song1.mp3', thumbnail: 'path/to/thumbnail1.jpg' },
  { name: 'Song 2', src: 'path/to/song2.mp3', thumbnail: 'path/to/thumbnail2.jpg' },
  // Add more songs as needed
];

const MusicPlayer = () => {
  return (
    <>
      <Head>
        <title>{siteTitle} - Students</title>
      </Head>
      <Header menuItems={menuItems} />
      <main className={style.musicContainer}>
        {musicFiles.map((file, index) => (
          <div key={index} className={style.musicItem}>
            <img src={file.thumbnail} alt={file.name} className={style.thumbnail} />
            <h4>{file.name}</h4>
            <audio controls>
              <source src={file.src} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </main>
    </>
  );
};

export default MusicPlayer;
      </main>

      <Footer />
    </>
  );
}
