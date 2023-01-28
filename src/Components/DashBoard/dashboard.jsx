import { Configuration, OpenAIApi } from "openai"
import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTextArea
} from "mdb-react-ui-kit";
import { BottomNavigation, BottomNavigationAction, Button } from "@mui/material";
import { TfiMenuAlt } from 'react-icons/tfi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsPlusLg } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'

const DashBorad = () => {
  // Open AI API

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);

  const [quesAns, setQuesAns] = useState([]);
  const [currQues, setCurrQues] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (event) => {
    setCurrQues(event.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
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
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setCurrQues('')
  };

  const messages = (quesAns) => {
    console.log(quesAns);
    return (
      <>
        <div className="d-flex flex-row justify-content-end mb-4">
          <div
            className="p-3 me-3 border"
            style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
          >
            <p className="small mb-0">
              {quesAns.question !== '' && quesAns.question}
            </p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
        </div>
        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div
            className="p-3 ms-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "rgba(57, 192, 237,.2)",
            }}
          >
            <p className="small mb-0">
              {quesAns.answer !== '' && quesAns.answer}
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <MDBContainer className="pt-5 ">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard id="chat1" style={{ borderRadius: "15px", marginTop: '12px' }}>
              <MDBCardBody>
                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div
                    className="p-3 ms-3"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "rgba(57, 192, 237,.2)",
                    }}
                  >
                    <p className="small mb-0">
                      Type Anything
                    </p>
                  </div>
                </div>
                {
                  (quesAns.slice(-1).answer !== '' && quesAns.slice(-1).answer !== '') &&
                  quesAns.map((responseObj) => {
                    console.log('entered');
                    return messages(responseObj);
                  })
                }

                <MDBTextArea
                  className="form-outline"
                  id="textAreaExample"
                  rows={4}
                  placeholder='Ask your Question'
                  style={{ resize: 'none', borderRadius: '20px' }}
                  onChange={handleQuestionChange}
                />

                <Button variant="contained" sx={{ display: 'flex', width: '100%', marginTop: '10px', borderRadius: '20px', backgroundColor: 'rgb(134 169 255)', padding: '11px', color: 'black' }} onClick={handleClick}>
                  <RiSendPlaneFill size='18px' style={{ marginRight: '10px' }} />{loading ? 'Generating...' : 'Generate'}
                </Button>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <BottomNavigation style={{zIndex: '-1' , marginTop: '-10px' , display: 'flex'}}>
        <BottomNavigationAction icon={<TfiMenuAlt />}/>
        <BottomNavigationAction icon={<BsPlusLg />} />
        <BottomNavigationAction icon={<SlCalender />} />
      </BottomNavigation>
    </>
  );
}

export default DashBorad;