import React from "react";
import "./About.css";


const AboutUs = () => {
  return (
    <div className="main">
      <div className="hh">
        <h1>
          About <span>Us</span>
        </h1>
      </div>
      <div className="first-card">
        <div className="img-1st">
          <img src="https://images.indianexpress.com/2022/01/farmer12.jpg" alt="" />
        </div>
        <div className="description">
          <p>
            E-Agro was established with the intention of beautifying your
            farm. We provide all agricultural services at your door step with on-time service provision. Our team of experts will guide you through everything to help you and your farm foster.
            Establshed with a motive of introducing digitization to the agricultural world and providing services, E-Agro is built around user's needs
            needs and requirements. So with excellent UI/UX design, it best in class.
          </p>
        </div>
      </div>
      <div className="hh">
        <h1>
          What Do <span>We</span> Do?
        </h1>
      </div>
      <div className="second-card">
        <div className="sub-cards">
          
          <h2>We Sell</h2>
          <p>
            We sell top quality products to our customers to ensure you have
            everything you need at the right and best quality. The quality of
            product isn't compromised and we will make sure of that.
          </p>
        </div>
        <div className="sub-cards">
          
          <h2>We Provide</h2>
          <p>
            We are always at your service and your inconvinience with regards to
            any of our products concerns us very much so we would always help
            you if you have any concerns regarding our product.
          </p>
        </div>
        <div className="sub-cards">
          
          <h2>We Care</h2>
          <p>
            We care about your needs and desired goal about your garden on how
            you are looking forward to beautify it. We care about your order and
            feedbacks are very important to us.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
