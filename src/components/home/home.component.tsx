import React from "react";
import * as S from "./home.styles";
import Navbar from "../shared/navbar/navbar.component";

const Home: React.FC = () => {
  return (
    <S.Home>
      <Navbar />
      <S.Inner>
        <S.Link to={"/images"}>
          <S.Title>View All</S.Title>
        </S.Link>
      </S.Inner>
    </S.Home>
  );
};

export default Home;
