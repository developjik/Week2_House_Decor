import React from "react";

import "Components/HouseIntroduction/Scss/Content.scss";

function Content() {
  return (
    <div className="content-container">
      <div className="content">
        <div className="content__img">
          <img
            className="content__img--main"
            src="https://cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg"
            alt="house-img"
          />
          <div className="tooltip" style={{ top: "32px", left: "30px" }}>
            <img
              className="tooltip-img tooltip-active"
              src="img/search.png"
              alt="search-img"
            />
            <img
              className="tooltip-img tooltip-active"
              src="img/close.png"
              alt="close-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
