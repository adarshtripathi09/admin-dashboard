import logo from './logo.svg';
import {Route , Routes, Switch  } from "react-router-dom";
import Edit from './Component/Edit';
import Dashboard from './Component/Dashboard';
import Trash from '../src/Component/Trash';
import Adduser from './Component/Adduser';


import './App.css';

function App() {
  return (
   <>
  
   <Routes>
      <Route path="/edit/:idd" element={< Edit/>} />
      <Route path="/" element={< Dashboard/>} />
      <Route path="/trash/" element={<Trash/>}/>
      <Route path="/adduser/" element={<Adduser/>}/>
   </Routes>
   </>
  );
}

export default App;
