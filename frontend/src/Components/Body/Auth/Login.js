import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   send data to backend
  const sendData = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    axios
      .post(`http://localhost:4000/api/user/login`, loginData)
      .then((result) => {
        // token
        const token = result.data.token;
        localStorage.setItem("userToken", JSON.stringify(token));
        // user data
        const data = result.data.user;
        localStorage.setItem("userData", JSON.stringify(data));

        toast.success("Login Success!");
        window.setTimeout(function () {
          window.location.replace("/");
        }, 2000);
      });
  };
  return (
    <div>
      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="top_link">
              <a href="#">
                <img
                  src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                  alt=""
                />
                Return home
              </a>
            </div>
            <div class="contact">
              <form action="">
                <h3>SIGN IN</h3>
                <input
                  type="text"
                  placeholder="USERNAME"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    Click Here.
                  </Link>
                </p>
                <button class="submit" onClick={sendData}>
                  Log In
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
                src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
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

export default Login;
