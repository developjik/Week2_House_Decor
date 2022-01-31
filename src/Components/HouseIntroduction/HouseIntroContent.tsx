import React, { useEffect, useState } from "react";
import axios from "axios";
import "Components/HouseIntroduction/Scss/HouseIntroContent.scss";

type product = {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
};
type data = {
  imageUrl: string;
  productList: product[];
};

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

  return (
    <div className="content-container">
      {datas && (
        <div className="content">
          <div className="content__img">
            <img
              className="content__img--main"
              src={datas.imageUrl}
              alt="house-img"
            />

            {datas.productList.map((p: product, idx: number) => (
              <div
                key={p.productId}
                className="tooltip"
                style={{
                  top: `${p.pointX * 1.65}px`,
                  left: `${p.pointY * 1.65}px`,
                }}
              >
                {number !== idx ? (
                  <button
                    type="button"
                    onClick={() => {
                      setNumber(idx);
                    }}
                  >
                    <img src="img/search.png" alt="search-img" />
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setNumber(-1);
                      }}
                    >
                      <img src="img/close.png" alt="close-img" />
                    </button>

                    <div className="tooltip--description">
                      <img
                        src={datas.productList[number].imageUrl}
                        alt={String(datas.productList[number].productId)}
                      />
                      <div className="tooltip--description__detail">
                        <div className="tooltip--description__detail--name">
                          {datas.productList[number].productName}
                        </div>
                        {datas.productList[number].outside ? (
                          <div>
                            <span className="tooltip--description__detail--estimate">
                              예상가
                            </span>
                            <span className="tooltip--description__detail--price">
                              {datas.productList[
                                number
                              ].priceDiscount.toLocaleString("eu")}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <span className="tooltip--description__detail--salesRate">
                              {datas.productList[number].discountRate}%
                            </span>
                            <span className="tooltip--description__detail--price">
                              {datas.productList[
                                number
                              ].priceDiscount.toLocaleString("eu")}
                            </span>
                          </div>
                        )}
                        <img
                          src="//cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
                          alt="상품 보기"
                        />
                        <div />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="content__products">
            {datas.productList.map((p: product, idx: number) => (
              <div key={p.productId} className="content__products--product">
                <button
                  type="button"
                  onClick={() => {
                    setNumber(idx);
                  }}
                >
                  <img
                    className={number === idx ? "active" : "no-active"}
                    src={p.imageUrl}
                    alt={String(p.productId)}
                  />
                  {p.discountRate > 0 && (
                    <div className="discount">
                      {p.discountRate}
                      <span>%</span>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeIntroContent;
