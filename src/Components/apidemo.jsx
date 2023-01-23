import React, { useState } from "react";
import axios from "axios";

function ChatGPT() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask ChatGPT a question..."
        />
        <button type="submit">Submit</button>
      </form>
      <p>{answer}</p>
    </div>
  );
}

export default ChatGPT;