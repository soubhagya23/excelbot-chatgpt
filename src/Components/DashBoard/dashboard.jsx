import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTextArea
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import '../../App.css'
import { RiSendPlaneFill } from 'react-icons/ri'

const DashBorad = () => {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <div className="d-flex">
            <input type="checkbox" id="excel" name="excel" value="excel" className="checkbox-style" />
            <label for="excel"> Excel</label><br />
          </div>
          <div className="d-flex">
            <input type="checkbox" id="python" name="python" value="python" className="checkbox-style" />
            <label for="python"> Python</label><br />
          </div>
          <MDBCard id="chat1" style={{ borderRadius: "15px", marginTop: '12px' }}>
            <MDBCardBody>
              <div className="d-flex flex-row justify-content-end mb-4">
                <div
                  className="p-3 me-3 border"
                  style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
                >
                  <p className="small mb-0">
                    What is a VLookup in Excel ?
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
                    VLOOKUP function says: What you want to look up, where you want to look for it, the column number in the range containing the value to return.
                  </p>
                </div>

              </div>
              <div className="d-flex flex-row justify-content-end mb-4">
                <div
                  className="p-3 me-3 border"
                  style={{ borderRadius: "15px", backgroundColor: "rgb(134 255 214)" }}
                >

                  <p className="small mb-0">
                    Generate Formula
                  </p>

                </div>
                <div
                  className="p-3 me-3 border"
                  style={{ borderRadius: "15px", backgroundColor: "rgb(134 255 214)" }}
                >
                  <p className="small mb-0">
                    Examples
                  </p>

                </div>
              </div>
              <MDBTextArea
                className="form-outline"
                id="textAreaExample"
                rows={4}
                placeholder='Ask your Question'
                style={{ resize: 'none', borderRadius: '20px' }}
              />
              <Button variant="contained" sx={{ display: 'flex', width: '100%', marginTop: '10px', borderRadius: '20px', backgroundColor: 'rgb(134 169 255)', padding: '11px', color: 'black' }}>
                <RiSendPlaneFill size='18px' style={{ marginRight: '10px' }} />Generate
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default DashBorad;