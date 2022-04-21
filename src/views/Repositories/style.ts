import styled from 'styled-components'

export const Repositories = styled.div`
  margin: 0 auto;
  margin-top:80px;
  max-width: 700px;
  section {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }
    & + section {
      margin-top: 16px;
    }
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  div {
    margin-left: 16px;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }
    p {
      font-size: 14px;
      color: #a8a8d3;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
  h2{
    color: var(--blue);
    font-size: 1rem;
    margin-top:1rem;
  }
`;