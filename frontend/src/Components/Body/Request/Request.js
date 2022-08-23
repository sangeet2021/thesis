import React, { useState } from "react";
import "./Requesr.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Request = () => {
  const [tool, setTool] = useState("");
  const [number_required, setNumber_required] = useState("");
  const [purpose, setPurpose] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  // send data
  const sendData = (e) => {
    e.preventDefault();
    const reqData = {
      email,
      tool,
      number_required,
      number,
      purpose,
    };
    axios.post(`http://localhost:4000/api/requests`, reqData).then((result) => {
      toast.success("Request submitted!");
      window.setTimeout(function () {
        window.location.reload();
      }, 2000);
    });
  };
  return (
    <div>
      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="contact">
              <form action="">
                <h3>REQUEST TOOL</h3>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Number Required"
                  value={number_required}
                  onChange={(e) => setNumber_required(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Tool"
                  value={tool}
                  onChange={(e) => setTool(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <button class="submit" onClick={sendData}>
                  Request
                </button>
              </form>
            </div>
          </div>
          <div class="right">
            <div class="right-text">
              <h2>E-Agro</h2>
              
            </div>
            <div class="right-inductor">
              <img
                src="IuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Request;
