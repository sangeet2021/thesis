import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header id="page-header">
        
        <div id="header-heading">
          <h1>E-Agro</h1>
          <p>
            E-Agro is devoted to provide users with every bit of agricultural assistance and service they need.
          </p>
        </div>
        <div id="header-menu">
          <button>Read More</button>
          
        </div>
      </header>

      <main>
        <section class="main-section">
          <header class="main-section-heading">
            <h2>What You Will Learn</h2>
          </header>
          <div class="cards-container">
            <div class="card">
              <div>
                <img
                  src="https://tunza.eco-generation.org/file/maxresdefault5.jpg"
                  alt="rectangle"
                />
              </div>
              <h4>Drone Operating basics</h4>
              <h6>Fly your First Drone</h6>
              <p>
                Learn to fly your very first agricultural drone and be a commercial agricultural drone pilot.
              </p>
            </div>
            <div class="card">
              <div>
                <img
                  src="https://images.hindustantimes.com/auto/img/2022/01/06/600x338/John_Deere_1641450820691_1641450826953.jpg "
                  alt="cube"
                />
              </div>
              <h4>Plowing Masterclass</h4>
              <h6>Working with tractors</h6>
              <p>
                Learn to drive and use the tractor properly to plow the field properly for nice growth.
              </p>
            </div>
            <div class="card">
              <div>
                <img
                  src="https://www.morningagclips.com/wp-content/uploads/2017/11/7209807274_ee19d661e6_z.jpg  "
                  alt="brush"
                />
              </div>
              <h4>Farm Workshops</h4>
              <h6>Learn How-to-Farm</h6>
              <p>
                Intense event offers you a perfect opportunity to study basics
                of farming and create your farm.
              </p>
            </div>
          </div>
        </section>

        <section class="main-section">
          <header class="main-section-heading">
            <h2>Our Experts</h2>
            <p>Learn more about heroes behind our platform.</p>
          </header>
          <div class="cards-container">
            <div class="card">
              <div>
                <img
                  src="https://s22.postimg.cc/ufotkzqqp/user-john-doe-99x99.jpg"
                  class="person-photo"
                  alt="John Doe photo"
                />
              </div>
              <h4 class="person-name">John Doe</h4>
              <h4 class="position">Crop Analyst</h4>
              <p>
                John is an expert in analyzing crops and detecting diseases and also treat them properly.
              </p>
            </div>
            <div class="card">
              <div>
                <img
                  src="https://s22.postimg.cc/ptspcncxd/user-july-mao-99x99.jpg"
                  class="person-photo"
                  alt="July Mao photo"
                />
              </div>
              <h4 class="person-name">July Mao</h4>
              <h4 class="position">Drone Operator</h4>
              <p>
                Since beginning of her career, July has worked in several big
                companies as a Drone Operator, helping farmers to foster.
              </p>
            </div>
            <div class="card">
              <div>
                <img
                  src="https://s22.postimg.cc/5mf9kaxfl/user-bernard-show-99x99.jpg"
                  class="person-photo"
                  alt="Bernard Show photo"
                />
              </div>
              <h4 class="person-name">Bernard Show</h4>
              <h4 class="position">Plant Doctor</h4>
              <p>
                Bernard is a full-time biologist in the international
                forums , and his experience and qualification are
                unbeaten.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
