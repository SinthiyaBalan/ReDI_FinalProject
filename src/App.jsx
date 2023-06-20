
import './App.css';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div data-theme="cupcake" className="app min-h-screen">
      <Nav />
        <Routes >
          <Route path='/' element={<MainSection />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
