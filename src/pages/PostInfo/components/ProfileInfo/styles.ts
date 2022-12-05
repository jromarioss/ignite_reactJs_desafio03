import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  padding: 2rem;
  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ProfileInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ProfileInfoLink = styled.div`
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
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
  }
`;

export const ProfileInfoIcons = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;