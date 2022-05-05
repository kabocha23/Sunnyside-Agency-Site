import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Body from './Body/Body';
import Testimonials from './Testimonials/Testimonials';
import Outro from './Outro/Outro';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Testimonials />
      <Outro />
      <Footer />
    </div>
  );
}

export default App;
