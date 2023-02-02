import { Configuration, OpenAIApi } from "openai"
import React, { useEffect, useState } from "react";
import Bot from '../assets/images/bot-img.jpg'
import Profile from '../assets/images/profile-img.jpg'
import { RiSendPlane2Fill } from 'react-icons/ri'
import FixedBottomNavigation from "../BottomBar/bottomBar";

const DashBorad = () => {

  // Open AI API

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration) ; 

  const [quesAns, setQuesAns] = useState(localStorage.response ? JSON.parse(localStorage.getItem('response')) : []) ;
  const [currQues, setCurrQues] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (event) => {
    setCurrQues(event.target.value);
  };

  useEffect(() => {
    quesAns !== [] && localStorage.setItem('response' , JSON.stringify(quesAns)) ;
  } , [quesAns]) ;

  const handleClick = async () => {
    setLoading(true)
    if(currQues !== ''){
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: currQues,
        temperature: 0.5,
        max_tokens: 1024,
      });
      setQuesAns((prevVal) => {
        return [...prevVal, {
          question: currQues
          , answer: response.data.choices[0].text
        }]
      });
      console.log('ok');
    } catch (error) {
      console.error(error);
    }
  }
  else{
    alert('Ask Something..') ;
  }
    setLoading(false);
    setCurrQues('')
  };

  const handleFunc = (currRes) => {
    setQuesAns(currRes)
  }

  const messages = (quesAns) => {
    console.log(quesAns);
    return (
      <>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
              <div><span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">{quesAns.question !== ''
                && quesAns.question}</span></div>
            </div>
            <img src={Profile} className="w-8 h-8 rounded-full order-2" alt="person"/>
          </div>
        </div>

        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
              <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">{quesAns.answer !== '' && quesAns.answer}</span></div>
            </div>
            <img src={Bot} className="w-8 h-8 rounded-full order-1" alt="bot"/>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex-1 sm:p- justify-between flex flex-col h-screen md:w-4/5 mx-auto">
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mt-4 md:mt-6 h-3/4">
          <div className="chat-message pt-5">
            <div className="flex items-end pt-2">
              <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Type Anything..</span></div>
              </div>
              <img src={Bot} className="w-8 h-8 rounded-full order-1" alt="bot"/>
            </div>
          </div>
          {
            quesAns && (quesAns.slice(-1).answer !== '' && quesAns.slice(-1).answer !== '') &&
            quesAns.map((response) => {
              console.log(response);
              return messages(response);
            })
          }
        </div>

        <div className="px-4 pt-4 mb-4">
          <div className="flex flex-col md:flex-row space-x-2 mb-4">
            <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-8 bg-gray-200 rounded-md py-2 border" onChange={handleQuestionChange} />
            <div className="items-center">
              <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-[7px] transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none w-full space-x-1" onClick={handleClick}>
                <span className="font-bold md:text-lg">{loading ? "Generating.." : "Generate"}</span>
                {loading ? null : <RiSendPlane2Fill size='20px' />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <FixedBottomNavigation chats={quesAns} func={handleFunc}/>
    </>
  );
}

export default DashBorad;