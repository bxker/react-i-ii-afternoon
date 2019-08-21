import React from 'react';
import './reset.css';
import './App.css';


//components
import AddData from './components/AddData'


function App() {
  return (
    <main className="App">
        <nav className="nav-bar">
          <h1>Home</h1>
        </nav>
        <section className='main-section'>
            <AddData />
        </section>
    </main>
  );
}

export default App;
