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

  .education-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .education-item {
    background-color: #2b2b2b;
    padding: 2rem 3rem;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
      
      .date {
        color: #fff;
      }
    }

    .edu-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 0.5rem;
      
      h3 {
        color: var(--green);
        font-size: 2rem;
        margin: 0;
      }
      
      .date {
        color: #a0a0a0;
        font-size: 1.6rem;
        font-weight: 500;
        min-width: 140px;
        text-align: right;
        transition: 0.25s;
      }
    }

    p {
      color: #FFF;
      font-size: 1.6rem;
      font-weight: 500;
      margin: 0;
    }
  }

  @media (max-width: 960px) {
    .edu-header {
      flex-direction: column;
      
      .date {
        text-align: left !important;
        margin-top: 0.5rem;
      }
    }
  }
`
