import React from 'react';
import Header from './pages/Header';
import Main from './pages/Main';
import Navigation from './Navigation';
import Footer from './pages/Footer'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
