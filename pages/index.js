import { FilmCategoriesSection, FilmsSection, UpcomingFilmsSection } from '../components';
import Footer from '../components/Footer';
import { aboutUs } from '../data';
import Head from 'next/head';


export default function Home() {
  return (
    <div className="">
       <Head>
        <title>Filmkatha Studios</title>
        <meta charSet="UTF-8"/>

        <meta
          name="description"
          content={aboutUs}
          key="desc"
        />
        <meta name="keywords"
         content={'filmkatha,filmkatha studios'}
         />

        <link
          rel="canonical"
          href={'https://www.filmkatha.com'}
          key="canonical"
        />
    </Head>

      <UpcomingFilmsSection/>
      <FilmsSection/>
      <FilmCategoriesSection/>
   

      <Footer/>
 

    </div>
  );
}

