import React from "react";
import * as S from "./navbar.styles";
import MainLayout from "../main-layout/main-layout.component";

interface Props {
  children?: any;
  className?: string;
}

const Navbar: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <S.Navbar className={className}>
      <MainLayout>
        <S.Link to={"/"}>
          <S.Title>ImgCleaner</S.Title>
        </S.Link>
        {children ? children : <S.Placeholder />}
      </MainLayout>
    </S.Navbar>
  );
};

export default Navbar;
