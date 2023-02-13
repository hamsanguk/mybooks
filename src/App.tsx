import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Book'
import Edit from './pages/Edit'
import Signin from './pages/Signin'
import Error from './pages/Error'
import Add from './pages/Add'

function App() {
  return(
    <Routes>
      <Route path={'/edit/:id'} element={<Edit/>}></Route>
      <Route path={'/book/:id'} element={<Detail/>}></Route>
      <Route path={'/add'} element={<Add/>}></Route>
      <Route path={'/signin'} element={<Signin/>}></Route>
      <Route path={'/'} element={<Home/>}></Route>
      
      <Route path={'/*'} element={<Error/>}></Route>
    </Routes>
  )
}

export default App;
