import React, { useState } from 'react';
import axios from 'axios';
import openai from "openai";

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const SpeechRecognition = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleVoiceCommand = (event) => {
    setIsListening(false);
    const transcript = event.results[0][0].transcript;
    setText(transcript);

    openai
      .completions({
        engine: "text-davinci-002",
        prompt: transcript,
        max_tokens: 100,
        n: 1,
        stop: ".",
        temperature: 0.5,
      })
      .then((response) => {
        setText(response.choices[0].text);
      });
  };

  const handleClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const recognizer = new window.SpeechRecognition();
      recognizer.start();
      setIsListening(true);
      recognizer.onresult = handleVoiceCommand;
      recognizer.onend = () => setIsListening(false);
      recognizer.addEventListener("audioend", () => {
        stream.getTracks().forEach((track) => track.stop());
      });
    } catch (error) {
      console.log("Failed to get microphone access:", error);
    }
  };

  return (
    <div style={{marginTop: 200}}>
      <button onClick={handleClick}>
        {isListening ? "Listening..." : "Click to start listening"}
      </button>
      <p>{text}</p>
    </div>
  );
};

export default SpeechRecognition;