import React from "react";
import * as S from "./main-layout.styles";

interface Props {
  children: any;
  className?: string;
}

const MainLayout: React.FC<Props> = ({ children, className }: Props) => {
  return <S.MainLayout className={className}>{children}</S.MainLayout>;
};

export default MainLayout;
