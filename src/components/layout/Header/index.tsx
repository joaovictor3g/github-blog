import { HeaderContainer } from "./styles";
import headerBgImg from "@/assets/header-bg.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerBgImg} alt="" />
    </HeaderContainer>
  );
}
