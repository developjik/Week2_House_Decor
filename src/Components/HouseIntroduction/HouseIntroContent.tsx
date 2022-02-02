import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { product, data } from "Common/Types/types";
import "Components/HouseIntroduction/Scss/HouseIntroContent.scss";
import HouseIntroContentTooltip from "Components/HouseIntroduction/HouseIntroContentTooltip";
import HouseIntroContentProduct from "./HouseIntroContentProduct";

function HomeIntroContent() {
  const [datas, setDatas] = useState<data>();
  const [number, setNumber] = useState<number>(-1);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (isDrag && scrollRef.current !== null) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    setIsDrag(true);

    if (scrollRef.current !== null) {
      setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
  };

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

  const img = new Image();
  img.src = datas.imageUrl;
  const { width } = img;
  const { height } = img;

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
              width={width}
              height={height}
              idx={idx}
              number={number}
              p={p}
              datas={datas}
              setNumber={setNumber}
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="content__products"
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={() => {
            setIsDrag(false);
          }}
          onMouseLeave={() => {
            setIsDrag(false);
          }}
        >
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
