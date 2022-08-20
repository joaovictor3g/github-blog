import { EnterpriseIcon } from "@/components/layout/icons/Enterprise";
import { GithubIcon } from "@/components/layout/icons/Github";
import { PeopleIcon } from "@/components/layout/icons/People";
import { RedirectIcon } from "@/components/layout/icons/Redirect";
import { LargeBox } from "@/components/styled/largeBox";

import { Container, ProfileInfos } from "./styles";

export function ProfileBox() {
  return (
    <LargeBox>
      <Container>
        <img src="https://github.com/joaovictor3g.png" alt="" />

        <ProfileInfos>
          <div className="name-github-link">
            <strong>João Victor</strong>

            <a href="https://github.com/joaovictor3g">
              Github
              <RedirectIcon />
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ul>
            <li>
              <GithubIcon />
              <span>joaovictor3g</span>
            </li>
            <li>
              <EnterpriseIcon />
              <span>Insight Data Science Lab</span>
            </li>
            <li>
              <PeopleIcon />
              <span>32 seguidores</span>
            </li>
          </ul>
        </ProfileInfos>
      </Container>
    </LargeBox>
  );
}
