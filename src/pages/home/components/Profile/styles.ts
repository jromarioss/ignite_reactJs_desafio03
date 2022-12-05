import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    border-radius: 6px;
  }
`;

export const ProfileInfo = styled.div`
  width: 38.25rem;

  h1 {
    color: ${props => props.theme["base-text"]};
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0.5rem 0 1.5rem;
  }
`;

export const ProfileInfoTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${props => props.theme.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
  }
`;

export const ProfileInfoBottom = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;