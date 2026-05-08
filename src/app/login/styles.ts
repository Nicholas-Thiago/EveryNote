import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: #4a4a4a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 520px;

  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 38px;

  background-color: white;

  border: none;
  border-radius: 6px;

  padding: 0 12px;

  font-size: 13px;
  color: black;

  outline: none;

  &::placeholder {
    color: #777;
  }
`;

export const ForgotPassword = styled.p`
  color: #7fd0ff;

  font-size: 12px;

  cursor: pointer;

  margin-top: -5px;
`;

export const RegisterText = styled.p`
  color: white;

  font-size: 12px;

  display: flex;
  gap: 5px;

  a {
    color: #7fd0ff;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;

  background-color: #3d9cff;

  border: none;
  border-radius: 6px;

  color: white;

  font-size: 14px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  margin-top: 5px;

  &:hover {
    opacity: 0.9;
  }
`;