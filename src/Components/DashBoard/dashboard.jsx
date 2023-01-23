import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { RiSendPlaneFill } from 'react-icons/ri'

const DashBorad = () => {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard id="chat1" style={{ borderRadius: "15px", marginTop: '50px' }}>
            <MDBCardBody>
              <div className="d-flex flex-row justify-content-end mb-4">
                <div
                  className="p-3 me-3 border"
                  style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
                >
                  <p className="small mb-0">
                    What is a cell address in Excel ?
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
                    A combination of a coloumn letter and a row letter,
                    that identifies a cell on a worksheet.
                  </p>
                </div>
              </div>
              <MDBTextArea
                className="form-outline"
                id="textAreaExample"
                rows={4}
                placeholder='Ask your Question'
                style={{ resize: 'none' }}
              />
              <Button variant="contained" sx={{display: 'flex', width: '100%',marginTop: '10px'}}>
              <RiSendPlaneFill size='18px' style={{ marginRight: '10px' }}/>Send
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default DashBorad;