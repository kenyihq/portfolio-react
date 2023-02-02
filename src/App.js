import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Experiencie from './components/Expirience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div class="wrapper" id="index">
      
      <Header/>
      <Main/>
      <Experiencie/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
