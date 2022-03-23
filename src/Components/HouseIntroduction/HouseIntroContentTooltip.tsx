import React, { Dispatch, SetStateAction } from 'react';
import { product, data } from 'Common/Types/types';
import HouseIntroContentTooltipDescription from './HouseIntroContentToolTipDescription';
import 'Components/HouseIntroduction/Scss/HouseIntroContentTooltip.scss';

type propsType = {
  width: number;
  height: number;
  idx: number;
  number: number;
  p: product;
  datas: data;
  setNumber: Dispatch<SetStateAction<number>>;
};

function HouseIntroContentTooltip({
  width,
  height,
  idx,
  number,
  p,
  datas,
  setNumber,
}: propsType) {
  const top = `${p.pointX * 1.65}px`;
  const left = `${p.pointY * 1.65}px`;

  const topLocation = p.pointX * 1.65 >= height * 0.4 ? 'bottom' : 'top';
  const leftLocation = p.pointY * 1.65 >= width * 0.4 ? 'right' : 'left';

  return (
    <div
      className="tooltip"
      style={{
        top,
        left,
      }}
    >
      <button
        type="button"
        onClick={() => {
          if (number === idx) {
            setNumber(-1);
          } else {
            setNumber(idx);
          }
        }}
      >
        {idx !== number ? (
          <img className="tooltip--btn" src="img/search.png" alt="search-img" />
        ) : (
          <img className="tooltip--btn" src="img/close.png" alt="close-img" />
        )}
      </button>

      <HouseIntroContentTooltipDescription
        idx={idx}
        topLocation={topLocation}
        leftLocation={leftLocation}
        number={number}
        datas={datas}
      />
    </div>
  );
}

export default HouseIntroContentTooltip;
