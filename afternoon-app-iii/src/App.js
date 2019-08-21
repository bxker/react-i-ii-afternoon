import React from 'react';
import './reset.css';
import './App.css';

//data 
import data from './data'
//components
import AddData from './components/AddData'
import Previous from './components/Previous'
import Next from './components/Next'

function App() {
  return (
    <main className="App">
        <nav className="nav-bar">
          <h1>Home</h1>
        </nav>
        <section className='main-section'>
          <div className="white-box">
            <AddData />
          </div>
          <div className="buttons">
            <Previous />
            <div className="buttons-mid">
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <Next />
          </div>
        </section>
    </main>
  );
}

export default App;
