import React from "react";
import Title from "Components/HouseIntroduction/Title";
import Content from "Components/HouseIntroduction/Content";

import { titleDatasType } from "Common/Types/types";

import "Pages/Scss/HouseIntroduction.scss";

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
        <Title titleDatas={titleDatas} />
        <Content />
      </div>
    </div>
  );
}

export default HouseIntroduction;
