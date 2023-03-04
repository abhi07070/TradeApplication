import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import Features from './components/Features/Features';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <LandingPage />
        <Features/>
      </BrowserRouter>
    </>
  );
}

export default App;
