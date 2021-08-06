import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
         <div className='flex'>
          <SideBar />
          <Main />
         </div>
    </Router>
  )
}

export default App
