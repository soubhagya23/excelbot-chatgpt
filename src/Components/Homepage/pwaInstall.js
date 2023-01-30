import React from "react";
import { usePWAInstall } from "react-use-pwa-install";
import Button from "@mui/material/Button";
import { FcApproval } from "react-icons/fc";

export const PwaIns = () => {
  const install = usePWAInstall();

  return (
    <header>
      
			{install && <Button
        variant="outlined"
        onClick={install}
        style={{
          marginBottom: "20px",
          backgroundColor: "#05182b",
          color: "white",
          textTransform: "none",
          fontFamily: "Inter",
          padding: "12px",
          borderRadius:'32px'
        }}
      >
        <FcApproval style={{ marginRight: "10px" }} size={23} />
        Install App
      </Button>} 
      
    </header>
  );
};

export default PwaIns;
