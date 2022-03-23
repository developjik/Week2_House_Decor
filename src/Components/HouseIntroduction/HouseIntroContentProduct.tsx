import React, { Dispatch, SetStateAction } from 'react';
import { product } from 'Common/Types/types';
import 'Components/HouseIntroduction/Scss/HouseIntroContentProduct.scss';

type propsType = {
  idx: number;
  number: number;
  p: product;
  setNumber: Dispatch<SetStateAction<number>>;
};

function HouseIntroContentProduct({ idx, number, p, setNumber }: propsType) {
  return (
    <div className="content__products--product">
      <button
        type="button"
        className={number === idx ? 'active' : 'no-active'}
        style={{ backgroundImage: `url(${p.imageUrl})` }}
        onClick={() => {
          setNumber(idx);
        }}
      >
        {p.discountRate > 0 && (
          <div className="discount">
            {p.discountRate}
            <span>%</span>
          </div>
        )}
      </button>
    </div>
  );
}

export default HouseIntroContentProduct;
