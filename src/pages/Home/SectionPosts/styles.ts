import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
  padding-bottom: 20px;

  .post-box-container {
    margin-top: 3rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 2rem;
  }

  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1,
    span {
      color: ${({ theme }) => theme.white};
    }

    h1 {
      font-weight: 700;
      font-size: 1.125rem; // 18px
      line-height: 160%;
    }

    span {
      color: ${({ theme }) => theme["gray-300"]};
      font-size: 0.875rem; // 14px
      line-height: 160%;
    }
  }

  input {
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme["gray-900"]};
    border: 1px solid ${({ theme }) => theme["gray-500"]};
    border-radius: 6px;
    padding: 0 10px;

    font-size: 1rem;
    color: ${({ theme }) => theme.white};
  }

  ${({ theme }) => theme.breakpoints.sm} {
    .post-box-container {
      grid-template-columns: 100%;
    }
  }
`;
