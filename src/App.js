import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cakes from './Pages/Cakes';
import Chocolates from './Pages/Chocolates';
import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cakes' element={<Cakes/>}/>
        <Route path='/chocolates' element={<Chocolates/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
