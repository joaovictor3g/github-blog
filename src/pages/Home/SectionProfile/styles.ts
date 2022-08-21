import { LargeBox } from "@/components/styled/largeBox";
import styled from "styled-components";

export const Container = styled(LargeBox)`
  display: flex;
  gap: 32px;

  background: ${({ theme }) => theme["gray-700"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  z-index: 10;

  margin-top: calc((-148px - 2rem) / 2);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .name-github-link {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: ${({ theme }) => theme.white};
      font-size: 1.5rem; // 24px
      font-weight: 700;
      line-height: 130%;
    }

    a {
      display: flex;
      align-items: center;
      gap: 5px;

      text-decoration: none;
      color: ${({ theme }) => theme.blue};
      text-transform: uppercase;
      transition: filter 0.2s;

      svg {
        width: 17px;
        height: 17px;
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  p {
    color: ${({ theme }) => theme["gray-200"]};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme["gray-400"]};
      }

      span {
        color: ${({ theme }) => theme.white};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.sm} {
    ul {
      margin-top: 1rem;
      flex-direction: column;
      gap: 4px;
    }
  }
`;
