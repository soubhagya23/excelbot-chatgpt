import axios from "axios";
import React, { useState } from "react";


function ChatGPT() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('clicked') ;
    try {
      const res = await axios.post("https://api.openai.com/v1/engines/davinci/completions", {
        prompt: question,
        max_tokens:1024,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`,
        },
      });
      setAnswer(res.data.choices[0].text);
      console.log(answer) ;
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask ChatGPT a question..."
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <p>{answer}</p>
    </div>
  );
}

export default ChatGPT;