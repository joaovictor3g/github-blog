import { EnterpriseIcon } from "@/components/layout/icons/Enterprise";
import { GithubIcon } from "@/components/layout/icons/Github";
import { PeopleIcon } from "@/components/layout/icons/People";
import { RedirectIcon } from "@/components/layout/icons/Redirect";
import { useFetch } from "@/hooks/useFetch";

import { Container, ProfileInfos } from "./styles";

type User = {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  name: string;
  bio: string;
  company: string;
};

export function SectionProfile() {
  const { data: user, error } = useFetch<User>("/users/joaovictor3g");

  if (!user || error) return null;

  return (
    <Container>
      <img src={user.avatar_url} alt="" />

      <ProfileInfos>
        <div className="name-github-link">
          <strong>{user.name}</strong>

          <a href={user.html_url}>
            Github
            <RedirectIcon />
          </a>
        </div>

        <p>{user.bio}</p>

        <ul>
          <li>
            <GithubIcon />
            <span>{user.login}</span>
          </li>
          <li>
            <EnterpriseIcon />
            <span>{user.company}</span>
          </li>
          <li>
            <PeopleIcon />
            <span>{user.followers} seguidores</span>
          </li>
        </ul>
      </ProfileInfos>
    </Container>
  );
}
