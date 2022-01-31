import React from "react";
import Header from "Components/Header/Header";
import Pages from "Pages/HouseIntroduction";

import "Common/Styles/_reset.scss";
import "Common/Styles/common.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
    </div>
  );
}

export default App;
