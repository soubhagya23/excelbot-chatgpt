import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import Bot from "../assets/images/bot-img.jpg";
import Profile from "../assets/images/profile-img.jpg";
import { RiSendPlane2Fill } from "react-icons/ri";
import FixedBottomNavigation from "../BottomBar/bottomBar";
import { SiMicrosoftexcel, SiPython } from "react-icons/si";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
import animation from "../Lottie/animation.json";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const DashBorad = (props) => {
  

  const configuration = new Configuration({
     apiKey: process.env.REACT_APP_OPENAI_APIKEY ,
    
  });
  const openai = new OpenAIApi(configuration);

  const [quesAns, setQuesAns] = useState(
    localStorage.response ? JSON.parse(localStorage.getItem("response")) : []
  );
  const [loading, setLoading] = useState(false);
  const [python, setPython] = useState(false);
  const [excel, setExcel] = useState(true);
  const [currQues, setCurrQues] = useState("Write an Excel Formula");
  const [showDropDown, setShowDropDown] = useState("Excel");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    excel
      ? setCurrQues("Write an Excel Formula")
      : setCurrQues("Write a Python code");
  }, [excel]);

  const handleQuestionChange = (event) => {
    setCurrQues(event.target.value);
    console.log(currQues);
  };

  const handleChange = (event) => {
    setShowDropDown(event.target.value);
  };

  useEffect(() => {
    quesAns !== [] && localStorage.setItem("response", JSON.stringify(quesAns));
  }, [quesAns]);

  const handleClick = async (Question) => {
    setLoading(true);
    if (Question !== "") {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: Question,
          temperature: 0.5,
          max_tokens: 1024,
        });
        setQuesAns((prevVal) => {
          return [
            ...prevVal,
            {
              question: Question,
              answer: response.data.choices[0].text,
            },
          ];
        });
        console.log("ok");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Ask Something..");
    }
    setLoading(false);
    setCurrQues("");
  };

  const handleCheckBox = () => {
    setExcel(!excel);
    setPython(!python);
  };

  const CheckBoxClick = () => {
    console.log(quesAns);
    if (excel) {
      const len = quesAns.length;
      const ques = quesAns[len - 1].question.replace(
        "Excel Formula",
        "Python code"
      );
      console.log(ques);
      setCurrQues(ques);
      handleClick(ques);
    } else {
      const len = quesAns.length;
      const ques = quesAns[len - 1].question.replace(
        "Python code",
        "Excel Formula"
      );
      setCurrQues(ques);
      handleClick(ques);
    }
  };

  const handleFunc = (currRes) => {
    setQuesAns(currRes);
  };

  const messages = (quesAns) => {
    return (
      <>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                  {quesAns.question !== "" && quesAns.question}
                </span>
              </div>
            </div>
            <img
              src={Profile}
              className="w-8 h-8 rounded-full order-2"
              alt="person"
            />
          </div>
        </div>

        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  {quesAns.answer !== "" && quesAns.answer}
                </span>
              </div>
            </div>
            <img src={Bot} className="w-8 h-8 rounded-full order-1" alt="bot" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {
        <div className="flex-1 justify-between flex flex-col h-screen w-screen md:w-4/5 mx-auto">
          <div className="flex justify-between items-center pt-[90px] px-3">
            <div className="flex justify-center">
              <div>
                <div className="dropdown relative">
                  <a
                    className="dropdown-toggle px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg active:text-white transition
                        duration-150 ease-in-out flex items-center whitespace-nowrap"
                    type="button"
                    id="dropdownMenuButton9"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    value={showDropDown}
                    onChange={handleChange}
                    style={{ textDecoration: "none" }}
                  >
                    {excel ? "Excel" : "Python"}

                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </a>
                  <ul
                    className="dropdown-menu min-w-max absolute text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-gray-800 border-none"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-gray-700 bg-gray-800"
                        href="#"
                        value="Excel"
                        onClick={handleCheckBox}
                      >
                        <SiMicrosoftexcel />
                        Excel
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-gray-700 bg-gray-800 "
                        href="#"
                        value="Python"
                        onClick={handleCheckBox}
                      >
                        <SiPython /> Python
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-2.5 text-white focus:outline-none focus:ring active:bg-indigo-500"
              onClick={CheckBoxClick}
              style={{ textDecoration: "none" }}
            >
              <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:ml-4">
                {excel ? "Convert to Python" : "Convert to Excel"}
              </span>
            </a>
          </div>
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mt-4 md:mt-6 h-3/4"
          >
            <div className="chat-message">
              <h5 className="text-xl font-bold leading-none text-gray-900">
                {quesAns.length > 0 ? (
                  ""
                ) : (
                  <Lottie options={defaultOptions} height={300} width={300} />
                )}
              </h5>
            </div>

            {quesAns &&
              quesAns.slice(-1).answer !== "" &&
              quesAns.slice(-1).answer !== "" &&
              quesAns.map((response) => {
                return messages(response);
              })}
          </div>

          {quesAns.length < 1 ? (
            ""
          ) : (
            <Popover>
              <PopoverHandler>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    class="text-white bg-gray-300 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Save
                  </button>
                </div>
              </PopoverHandler>
              <PopoverContent>
                <div>
                  <p className="text-[16px] font-semibold">
                    Do you want to save the Chats?
                  </p>
                  <div className="flex space-x-3 justify-center">
                    <Button variant="contained">Yes</Button>
                    <Button variant="outlined">No</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}

          <div className="px-4 mb-5">
            <div className="flex space-x-2 mb-2 pt-3">
              <input
                type="text"
                placeholder="Write your message"
                value={currQues}
                className="w-fullfocus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-8 bg-gray-200 rounded-md py-2 border"
                onChange={handleQuestionChange}
              />
              <div className="items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-[8px] transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none w-full space-x-1"
                  onClick={() => {
                    handleClick(currQues);
                  }}
                >
                  {loading ? "..." : <RiSendPlane2Fill size="25px" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      <FixedBottomNavigation chats={quesAns} func={handleFunc} />
    </>
  );
};

export default DashBorad;
