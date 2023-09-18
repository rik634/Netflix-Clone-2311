import React from 'react';
import './App.css';
import Header from './components/Header';
//import Login from './components/Login';
import Banner from './components/Banner';
import List from './components/List';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
function App() {
  return (
    <React.Fragment>
      {/* BrowserRouter = used for navigation 
      Routes = we add routed in them
      Routes = takes attributes (values provided in dom)
      */}
      <Router>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Header/>
              <HomePage/>
            </React.Fragment>
          }/>
          <Route path='/login' element={
            <React.Fragment>
              <Header/>
              <Login  page = {true}/>
            </React.Fragment>
          }/>
          <Route path='/register' element={
            <React.Fragment>
              <Header/>
              <Login page={false}/>
            </React.Fragment>
          }/>
          <Route path='/dashboard' element={
            <React.Fragment>
              <Header/>
              <Banner/>
              <List/>
            </React.Fragment>
          }/>
          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
