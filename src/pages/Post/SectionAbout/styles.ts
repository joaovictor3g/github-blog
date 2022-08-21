import { LargeBox } from "@/components/styled/largeBox";
import styled from "styled-components";

export const Container = styled(LargeBox)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: calc((-148px - 2rem) / 2);

  header {
    display: flex;
    justify-content: space-between;

    & > a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.blue};
      text-transform: uppercase;
      text-decoration: none;
      gap: 8px;
      font-size: 0.875rem; // 14px
      font-weight: 700;
      line-height: 160%;

      svg {
        width: 15px;
        height: 15px;
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  h1 {
    color: ${({ theme }) => theme.white};
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

      span,
      time {
        color: ${({ theme }) => theme["gray-300"]};
      }
    }
  }
`;
