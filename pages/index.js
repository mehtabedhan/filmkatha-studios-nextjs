import { FilmCategoriesSection, FilmsSection, UpcomingFilmsSection } from '../components';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  return (
    <div className="">

      <FilmsSection/>
      <UpcomingFilmsSection/>
      <FilmCategoriesSection/>
   

      <Footer/>
 

    </div>
  );
}

