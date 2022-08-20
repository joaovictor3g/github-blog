import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2.5rem;
  z-index: 2;

  display: flex;
  gap: 32px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
`;
