import './App.css';
import Homepage from './Components/Homepage/main';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard/dashboard';
import Header from './Components/Homepage/header';
import SmHeader from './Components/Homepage/smHeader';

function App() {
  return (
    // <ChatGPT />
    <>
     <div id='dtr-wrapper' className='clearfix'>
      <Header />

      <SmHeader />
     <Routes>
        <Route path='/' element={<Homepage />}/>
       <Route path='/dashboard' element={<DashBoard />}/>
     </Routes>
     </div>
   </>
  );
}

export default App;
