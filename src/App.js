import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 
import RoomDisplay from './Components/BookRoom/RoomDisplay';
import BookRoom from './Components/BookRoom/BookRoom';
import Registration from './Components/Registeration';
import Login from './Components/Login';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CustomerDashboard" element={<Footer />} />
        <Route path="/RoomDisplay" element={<RoomDisplay />} />
        <Route path="/BookRoom" element={<BookRoom />} />
        

      </Routes>

      </BrowserRouter>
    
   
  );
}

export default App;
