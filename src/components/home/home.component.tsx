import React from "react";
import * as S from "./home.styles";
import Navbar from "../shared/navbar/navbar.component";

const Home: React.FC = () => {
  return (
    <S.Home>
      <Navbar />
      <S.Title>Home</S.Title>
    </S.Home>
  );
};

export default Home;
