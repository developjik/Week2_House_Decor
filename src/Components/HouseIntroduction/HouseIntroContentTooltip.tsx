import React, { Dispatch, SetStateAction } from "react";
import { product, data } from "Common/Types/types";
import HouseIntroContentTooltipDescription from "./HouseIntroContentToolTipDescription";
import "Components/HouseIntroduction/Scss/HouseIntroContentTooltip.scss";

type propsType = {
  idx: number;
  number: number;
  p: product;
  datas: data;
  setNumber: Dispatch<SetStateAction<number>>;
};

function HouseIntroContentTooltip({
  idx,
  number,
  p,
  datas,
  setNumber,
}: propsType) {
  return (
    <div
      className="tooltip"
      style={{
        top: `${p.pointX * 1.65}px`,
        left: `${p.pointY * 1.65}px`,
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
        number={number}
        datas={datas}
      />
    </div>
  );
}

export default HouseIntroContentTooltip;
