import './App.scss';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import MainTasks from './components/MainTasks';
import OurProjects from './components/OurProjects';
import PrHome from './components/PrHome';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <main>
          <PrHome />
          <AboutUs />
          <MainTasks />
          <OurProjects />
          <ContactUs />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
