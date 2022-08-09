import React, { Children, useState } from "react";
import "../component/SignupStyle.css";
import { Box, CardContent, Grid, Tab, Tabs } from "@mui/material";
import Login from "../assets/Login.jpg";
import UserLogin from "../component/UserLogin";
import Reg from "./Reg";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const SignupForm = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, item) => {
    setValue(item);
  };
  return (
    <>
      <Box component="div" className="main_bx">
        <div className="form_bx">
          <div className="left_section">
            <img src={Login} alt="image" />
          </div>
          <div className="right_section">
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Box>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        width: "100%",
                      }}
                    >
                      <Tabs
                        value={value}
                        textColor="primary"
                        indicatorColor="primary"
                        onChange={handleChange}
                      >
                        <Tab
                          label="Login"
                          sx={{ textTransform: "none", fontWeight: "bold" }}
                        ></Tab>
                        <Tab
                          label="Registration"
                          sx={{ textTransform: "none", fontWeight: "bold" }}
                        ></Tab>
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      {<UserLogin />}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      {<Reg />}
                    </TabPanel>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SignupForm;
