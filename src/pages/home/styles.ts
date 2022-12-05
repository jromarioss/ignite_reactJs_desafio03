import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 54rem;
  margin: auto;
  margin-top: -7rem;
  padding-bottom: 14rem;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  a {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  

  div {
    display: flex;

    h2 {
      width: 17.6875rem;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  p {
    // colocar quantidade de linhas
    color: ${props => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;