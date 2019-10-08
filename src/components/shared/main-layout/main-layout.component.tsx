import React from "react";
import * as S from "./main-layout.styles";

interface Props {
  children: any;
}

const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return <S.MainLayout>{children}</S.MainLayout>;
};

export default MainLayout;
