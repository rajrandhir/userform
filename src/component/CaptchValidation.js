import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const CaptchValidation = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  return (
    <>
      <div style={{ padding: "10px", backgroundColor: "rgb(246 246 248" }}>
        <div>
          <LoadCanvasTemplate />
        </div>
        <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
          <TextField
            id="user_captcha_input"
            size="small"
            name="captcha"
            label="Enter captcha"
            style={{ backgroundColor: "white", width: "150px" }}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            onClick={doSubmit}
            color="success"
            size="small"
          >
            submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CaptchValidation;
