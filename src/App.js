import './App.css';
import Homepage from './Components/Homepage/main';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard/dashboard';
import Header from './Components/Homepage/header';
import SmHeader from './Components/Homepage/smHeader';
import SpeechRecognition from './Components/DashBoard/SpeechRecognition';
import Chatpage from './Components/ChatsPage/chatpage';
import EmailSignUp from './Components/Login/EmailSignUp';
import BBar from './Components/BottomBar/bBar';

function App() {
  return (
    // <ChatGPT />
    <>
      <div>
        <Header />

        <SmHeader />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/dashboard/chats' element={<Chatpage />} />
          <Route path='/test' element={<SpeechRecognition />} />
          <Route path='/email' element={<EmailSignUp />} />
          <Route path="/bar" element={<BBar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
