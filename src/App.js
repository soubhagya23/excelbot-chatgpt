import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase-config"; 
import "./App.css";
import Homepage from "./Components/Homepage/main";

import DashBoard from "./Components/DashBoard/dashboard";
import Header from "./Components/Homepage/header";
import SmHeader from "./Components/Homepage/smHeader";
import SpeechRecognition from "./Components/DashBoard/SpeechRecognition";
import Chatpage from "./Components/ChatsPage/chatpage";
import EmailSignUp from "./Components/Login/EmailSignUp";
import BBar from "./Components/BottomBar/bBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("onAuthStateChanged", user);
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);
  function requireAuth(nextState, replace) {
    console.log("requireAuth", isAuthenticated);
    if (!isAuthenticated) {
      navigate("/");
    }
  }
  return (
    <>
      <div>
        <Header />
        <SmHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<DashBoard />} onEnter={requireAuth} />
          <Route path="/dashboard/chats" element={<Chatpage />} onEnter={requireAuth} />
          <Route path="/test" element={<SpeechRecognition />} onEnter={requireAuth} />
          <Route path="/email" element={<EmailSignUp />} />
          <Route path="/bar" element={<BBar />} onEnter={requireAuth} />
        </Routes>
      </div>
    </>
  );
}

export default App;