import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Sent from './components/Sent/sent';
import Vocab from './components/vocab/vocab';
import './App.css';
  
function App(){
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sent">Semesters</Link>
              </li>
              <li>
                <Link to="/vocab">Subjects</Link>
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