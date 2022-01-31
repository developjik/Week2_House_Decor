import React from "react";
import "Components/Header/Scss/Header.scss";

function Header() {
  return (
    <nav className="header-container">
      <div className="header">
        <div className="header__logo">
          <img
            className="header__logo--img"
            src="img/home_decor.png"
            alt="house_decor"
          />
        </div>

        <div className="header__category">
          <img
            className="header__category--img"
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            alt="menu"
          />
          카테고리
        </div>

        <div className="header__items">
          <div className="header__items--item">스토어</div>
          <div className="header__items--item header__items--active">
            컨텐츠
          </div>
          <div className="header__items--item">커뮤니티</div>
        </div>

        <div className="header__input">
          <input placeholder="내 스타일 매거진, 상품, 사진 검색" />
          <img
            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"
            alt="search"
          />
        </div>

        <div className="header__shipping">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"
            alt="shipping-bag"
          />
        </div>

        <div className="header__infos">
          <div className="header__infos--info login-btn">로그인/가입</div>
          <div className="header__infos--info">비회원 주문조회</div>
          <div className="header__infos--info">고객센터</div>
        </div>

        <div />
      </div>
    </nav>
  );
}

export default Header;
