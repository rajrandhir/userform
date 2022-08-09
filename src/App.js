import React from "react";
import './App.css';
import SignupForm from "./component/SignupForm";
import ForgetPassword from "./component/ForgetPassword";
import { Routes, Route } from 'react-router-dom';
import CaptchValidation from "./component/CaptchValidation";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignupForm />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />
    </Routes>
    {/* <CaptchValidation /> */}

    </>
  );
}

export default App;
