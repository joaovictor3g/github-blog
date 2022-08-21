import styled from "styled-components";
import headerBgImg from "@/assets/header-bg.png";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;

  background-image: url(${headerBgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
