import React from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { SiGooglemessages } from "react-icons/si";
import { AiFillPlusCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Paper from "@mui/material/Paper";

export default function FixedBottomNavigation() {
  return (
    <Box sx={{ pb: 7 }}>
      
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation style={{backgroundColor:'#f0e5ff'}}>
          <BottomNavigationAction
            label="Messages"
            icon={<SiGooglemessages size={60} color={'black'}/>}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<AiFillPlusCircle size={60} color={'black'}/>}
          />
          <BottomNavigationAction label="Archive" icon={<CgProfile size={60} color={'black'}/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
