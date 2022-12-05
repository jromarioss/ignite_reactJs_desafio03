import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 3.125rem;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    padding: 1rem 0.75rem;

    &::placeholder {
      color: ${props => props.theme["base-text"]};
    }

    &:focus {
      outline: 0;
      border: 1px solid ${props => props.theme.blue};
      &::placeholder {
        color: ${props => props.theme["base-text"]};
      }
    }
  } 
`;