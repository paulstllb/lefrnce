import React, { useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Sent from './components/Sent/sent';
import Vocab from './components/vocab/vocab';
import './App.css';
function App() {
  
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Accueil</Link>
                <p className="translated">Home</p>
              </li>
              <li>
                <Link to="/sent">Phrases</Link>
                <p className='translated'>Sätze</p>
              </li>

              <li>
                <Link to="/vocab">Vocabulaire</Link>
                <p className='translated'>Vokabular</p>
              </li>
              
            </ul>
            <></>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/sent' element={< Sent />}></Route>
                 <Route exact path='/vocab' element={< Vocab />}></Route>
                
          </Routes>
          </div>
       </Router>
   );
  }

  export default App