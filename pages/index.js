import { FilmCategoriesSection, FilmsSection, UpcomingFilmsSection } from '../components';
import Footer from '../components/Footer';
import { aboutUs } from '../data';
import Head from 'next/head';


export default function Home() {
  return (
    <div className="">
       <Head>
        <title>Filmkatha Studios</title>
        <meta charset="UTF-8"/>

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
          href={domainUrl}
          key="canonical"
        />
    </Head>

      <FilmsSection/>
      <UpcomingFilmsSection/>
      <FilmCategoriesSection/>
   

      <Footer/>
 

    </div>
  );
}

