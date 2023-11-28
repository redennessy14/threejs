import React from "react";
import ThreeDModelViewer from "../ThreeDModel/ThreeDModel";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="header__block">
        <div className="header__block_left">
          <ThreeDModelViewer />
        </div>
        <div className="header__block_right">
          <h1>Home Page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            perferendis. Laboriosam inventore at, illo, corrupti eum alias
            recusandae quidem rem quis exercitationem repellendus eius?
            Distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
