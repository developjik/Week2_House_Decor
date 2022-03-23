import React from 'react';
import { titleDatasType } from 'Common/Types/types';

import 'Components/HouseIntroduction/Scss/HouseIntroTitle.scss';

type propsType = {
  titleDatas: titleDatasType;
};

function HouseIntroTitle({ titleDatas }: propsType) {
  return (
    <div className="title-container">
      <div className="title">
        <div className="title-date">{titleDatas.date}</div>
        <div className="title-title">{titleDatas.title}</div>
        <div className="title-tags">
          {titleDatas.tags.map((name: string) => (
            <span key={name}>#{name}</span>
          ))}
        </div>
        <div className="title-lockers-comments">
          <span>보관함 {titleDatas.locker}</span>{' '}
          <span>댓글 {titleDatas.comments}</span>
        </div>
      </div>
    </div>
  );
}

export default HouseIntroTitle;
