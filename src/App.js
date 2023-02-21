import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase-config"; 
import "./App.css";
import Homepage from "./Components/Homepage/main";
import Chatpage from "./Components/ChatsPage/chatpage";
import EmailSignUp from "./Components/Login/EmailSignUp";
import MainBoard from "./Components/DashBoard/MainBoard";
import MainLogin from "./Components/Login/MainLogin";
import SignUp from "./Components/Login/SignUp";

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
       {/*  <Header />
        <SmHeader /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<MainBoard />} onEnter={requireAuth} />
          <Route path="/dashboard/chats" element={<Chatpage />} onEnter={requireAuth} />
          
          <Route path="/email" element={<EmailSignUp />} />
         
         
          <Route path="/login" element={<MainLogin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;