import { EnterpriseIcon } from "@/components/layout/icons/Enterprise";
import { GithubIcon } from "@/components/layout/icons/Github";
import { PeopleIcon } from "@/components/layout/icons/People";
import { RedirectIcon } from "@/components/layout/icons/Redirect";
import { useUser } from "@/contexts/UserContext";

import { Container, ProfileInfos } from "./styles";

export function SectionProfile() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Container>
      <img src={user.avatarUrl} alt="" />

      <ProfileInfos>
        <div className="name-github-link">
          <strong>{user.name}</strong>

          <a href={user.htmlUrl}>
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
