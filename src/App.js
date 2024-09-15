import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer/Footer';
import Nav from './component/Header/Navbar';
import Que from './component/Frequently/Que';
import Testimonials from './component/Review/Testimonials';
import Features from './component/Features/Features';
import YouTubeChannels from './component/YoutubeChannel/YouTubeChannels';
import TopCourses from './component/TopCourses/TopCourses';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from './component/ImageSlider/ImageSlider';
import Welcome from './component/Welcome/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import YouTubePlaylistsClass12 from './component/playlists/YouTubePlaylistsClass12';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<>
          <Welcome />
          <ImageSlider />
          <TopCourses />
          <YouTubeChannels />
          <Features />
          <Testimonials />
          <Que />
        </>} />
        
        {/* Define a new route for YouTube playlists */}
        <Route path="/class12" element={<YouTubePlaylistsClass12 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
