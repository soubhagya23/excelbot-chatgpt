import React, { useState } from 'react';
import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
function SpeechRecognition() {
  const [generatedText, setGeneratedText] = useState('');

  const handleVoiceCommand = async (e) => {
    if (e.results && e.results.length > 0) {
      const voiceCommand = e.results[0][0].transcript;
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: voiceCommand,
          temperature: 0.5,
          max_tokens: 100
        },
        {
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` }
        }
      );
      const generatedText = response.data.choices[0].text;
      setGeneratedText(generatedText);
    } else {
      setGeneratedText('No speech detected. Please try again.');
    }
  }

  const handleClick = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const recognition = new SpeechRecognition();
          recognition.start();
          recognition.onresult = handleVoiceCommand;
          recognition.onend = () => {
            recognition.start();
          };
        })
        .catch(err => {
          setGeneratedText('Failed to get microphone access. Please try again.');
        });
    }else if(!('webkitSpeechRecognition' in window)){
        setGeneratedText('Your browser does not support speech recognition. Please try again with different browser');
    }else if(!('getUserMedia' in navigator.mediaDevices)){
        setGeneratedText('Your browser does not support microphone access. Please try again with different browser');
    }
  };
  
  return (
    <div style={{marginTop:200}}>
    <button onClick={handleClick}>Generate Text</button>
    <p>{generatedText}</p>
  </div>
  );
}

export default SpeechRecognition;