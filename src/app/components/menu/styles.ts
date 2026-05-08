import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;

  background-color: #000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  border-top: 2px solid #9333ea;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
  }

  a:hover {
    color: #9333ea;
  }
`;

export const DropContent = styled.div`
  display: none;

  flex-direction: column;

  position: absolute;
  top: 30px;
  right: 0;

  background-color: #111;

  min-width: 180px;

  border-radius: 8px;

  padding: 10px;

  gap: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  a {
    color: white;
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    transition: 0.3s;
  }

  a:hover {
    background-color: #9333ea;
  }
`;

export const Dropdown = styled.div`
  position: relative;

  &:hover ${DropContent} {
  display: flex;
}
`;

export const DropButton = styled.button`
  background: none;
  border: none;

  color: white;
  font-size: 14px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: #9333ea;
  }
`;