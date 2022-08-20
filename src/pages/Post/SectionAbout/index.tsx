import { ArrowIcon } from "@/components/layout/icons/Arrow";
import { CalendarIcon } from "@/components/layout/icons/Calendar";
import { GithubIcon } from "@/components/layout/icons/Github";
import { RedirectIcon } from "@/components/layout/icons/Redirect";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export function SectionAbout() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowIcon />
          <span>Voltar</span>
        </Link>

        <a href="">
          <span>Ver no github</span>
          <RedirectIcon />
        </a>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <ul>
        <li>
          <GithubIcon />
          <span>joaovictor3g</span>
        </li>

        <li>
          <CalendarIcon />
          <time>Há 1 dia</time>
        </li>
      </ul>
    </Container>
  );
}
