import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Programs from './components/programs/Programs';
import Ideas from './components/ideas/Ideas';
import Top from './components/top/Top';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Top/>
      <Programs />
      <Ideas/>
      <Footer/>
    </div>
  );
}

export default App;
