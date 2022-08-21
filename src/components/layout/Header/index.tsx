import { HeaderContainer } from "./styles";
import githubBlogLogo from "@/assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogo} alt="" className="logo" />
    </HeaderContainer>
  );
}
