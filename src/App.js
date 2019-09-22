import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './pages/Header';
import Main from './pages/Main';
import Navigation from './pages/Navigation';
import Footer from './pages/Footer'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
