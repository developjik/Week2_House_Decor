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

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://cdn.ggumim.co.kr/test/image_product_link.json")
        .then((res) => {
          setDatas(res.data);
        });
    }

    fetchData();
    console.log(datas);
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

            <div className="tooltip" style={{ top: "800px", left: "320px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
            <div className="tooltip" style={{ top: "530px", left: "290px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
            <div className="tooltip" style={{ top: "475px", left: "150px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
            <div className="tooltip" style={{ top: "250px", left: "330px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
            <div className="tooltip" style={{ top: "340px", left: "720px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
            <div className="tooltip" style={{ top: "580px", left: "450px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
            <div className="tooltip" style={{ top: "290px", left: "200px" }}>
              <img
                className="tooltip-img tooltip-active"
                src="img/search.png"
                alt="search-img"
              />
              <img
                className="tooltip-img tooltip-active"
                src="img/close.png"
                alt="close-img"
              />
            </div>
          </div>

          <div className="content__products">
            {datas.productList.map((p: product) => (
              <div key={p.productId} className="content__products--product">
                <img src={p.imageUrl} alt={String(p.productId)} />
                {p.discountRate > 0 && (
                  <div className="discount">
                    {p.discountRate}
                    <span>%</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeIntroContent;
