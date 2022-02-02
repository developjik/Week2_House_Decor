import React, { useEffect, useState } from "react";
import axios from "axios";
import { product, data } from "Common/Types/types";
import "Components/HouseIntroduction/Scss/HouseIntroContent.scss";
import HouseIntroContentTooltip from "Components/HouseIntroduction/HouseIntroContentTooltip";
import HouseIntroContentProduct from "./HouseIntroContentProduct";

function HomeIntroContent() {
  const [datas, setDatas] = useState<data>();
  const [number, setNumber] = useState<number>(-1);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://cdn.ggumim.co.kr/test/image_product_link.json")
        .then((res) => {
          setDatas(res.data);
        });
    }

    fetchData();
  }, []);

  if (!datas) return null;
  return (
    <div className="content-container">
      <div className="content">
        <div className="content__img">
          <img
            className="content__img--main"
            src={datas.imageUrl}
            alt="house-img"
          />

          {datas.productList.map((p: product, idx: number) => (
            <HouseIntroContentTooltip
              key={datas.productList[idx].productId}
              idx={idx}
              number={number}
              p={p}
              datas={datas}
              setNumber={setNumber}
            />
          ))}
        </div>

        <div className="content__products">
          {datas.productList.map((p: product, idx: number) => (
            <HouseIntroContentProduct
              key={p.productId}
              idx={idx}
              number={number}
              p={p}
              setNumber={setNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeIntroContent;
