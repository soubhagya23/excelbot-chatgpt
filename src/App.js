import logo from './logo.svg';
import './App.css';
import ChatGPT from './Components/apidemo';
import Homepage from './Components/Homepage/main';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard/dashboard';
import Header from './Components/Homepage/header';

function App() {
  return (
    // <ChatGPT />
    <>
     <Header />

     <Routes>
        <Route path='/' element={<Homepage />}/>
       <Route path='/dashboard' element={<DashBoard />}/>
     </Routes>
   </>
  );
}

export default App;
