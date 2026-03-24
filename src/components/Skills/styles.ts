import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2{
    display: inline-block;
    margin-bottom: 4rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  .skills-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .skill-category {
    background-color: #2b2b2b;
    padding: 2rem 3rem;
    border-radius: 1.2rem;
    transition: 0.25s;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    h3 {
      color: var(--green);
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    p {
      color: #FFF;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.6;
    }
  }

  @media (max-width: 960px) {
    .skills-content {
      grid-template-columns: 1fr;
    }
  }
`
