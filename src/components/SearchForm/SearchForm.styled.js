import styled from '@emotion/styled';

export const StyledForm = styled.div`
  display: flex;
`;

export const StyledSubmit = styled.form`
  border-bottom: 1px solid #ffffff;
  box-shadow: 0px 2px 10px 1px #240b36;
`;

export const InputSearch = styled.input`
  height: 100%;
  letter-spacing: 0.1em;
  outline: none;
  ::placeholder {
    opacity: 0.8;
  }
`;

export const SubmitType = styled.button`
  padding: 12px;
  :hover {
    color: red;
    background-color: mediumBlue;
  }
`;
