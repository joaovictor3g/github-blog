import { ArrowIcon } from "@/components/layout/icons/Arrow";
import { CalendarIcon } from "@/components/layout/icons/Calendar";
import { ChatIcon } from "@/components/layout/icons/Chat";
import { GithubIcon } from "@/components/layout/icons/Github";
import { RedirectIcon } from "@/components/layout/icons/Redirect";
import { difference } from "@/utils/date";
import { Link } from "react-router-dom";
import { Container } from "./styles";

type About = {
  user: {
    login: string;
  };
  updatedAt: string;
  title: string;
  url: string;
  comments: number;
};
interface SectionAboutProps {
  about: About;
}

export function SectionAbout({ about }: SectionAboutProps) {
  const timePhrase = difference(new Date(about.updatedAt));

  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowIcon />
          <span>Voltar</span>
        </Link>

        <a href={about.url}>
          <span>Ver no github</span>
          <RedirectIcon />
        </a>
      </header>

      <h1>{about.title}</h1>

      <ul>
        <li>
          <GithubIcon />
          <span>{about.user?.login}</span>
        </li>

        <li>
          <CalendarIcon />
          <time>{timePhrase}</time>
        </li>

        <li>
          <ChatIcon />
          <span>{about.comments} comentários</span>
        </li>
      </ul>
    </Container>
  );
}
