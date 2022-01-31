import React from "react";
import { titleDatasType } from "Common/Types/types";

import "Components/HouseIntroduction/Scss/Title.scss";

type TitleProps = {
  titleDatas: titleDatasType;
};

function Title({ titleDatas }: TitleProps) {
  const tagsMap: React.ReactElement[] = titleDatas.tags.map((name: string) => (
    <span key={name}>#{name}</span>
  ));

  return (
    <div className="title-container">
      <div className="title">
        <div className="title-date">{titleDatas.date}</div>
        <div className="title-title">{titleDatas.title}</div>
        <div className="title-tags">{tagsMap}</div>
        <div className="title-lockers-comments">
          <span>보관함 {titleDatas.locker}</span>{" "}
          <span>댓글 {titleDatas.comments}</span>
        </div>
      </div>
    </div>
  );
}

export default Title;
