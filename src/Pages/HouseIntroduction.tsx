/* eslint-disable max-len */
import React from "react";
import HomeIntroTitle from "Components/HouseIntroduction/HouseIntroTitle";
import HomeIntroContent from "Components/HouseIntroduction/HouseIntroContent";
import "Pages/Scss/HouseIntroduction.scss";

import { titleDatasType } from "Common/Types/types";

const titleDatas: titleDatasType = {
  title: "화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방",
  tags: ["방꾸미기", "우드톤", "화이트", "라탄"],
  locker: 94,
  comments: 0,
  date: "2022.01.12 17:55",
};

function HouseIntroduction() {
  return (
    <div className="home-intro-container">
      <div className="home-intro">
        <HomeIntroTitle titleDatas={titleDatas} />
        <HomeIntroContent />
      </div>
    </div>
  );
}

export default HouseIntroduction;
