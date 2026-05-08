import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  min-height: 100vh;

  background-color: #2e2e2e;

  color: white;
`;

export const SectionTitle = styled.h2`
  background-color: #696969;

  padding: 15px;

  font-size: 22px;
  font-weight: bold;
`;

export const BooksRow = styled.div`
  display: flex;

  gap: 25px;

  padding: 25px;

  background-color: #3b3b3b;

  flex-wrap: wrap;
`;

export const BookCard = styled.div`
  width: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cover = styled.img`
  width: 140px;
  height: 210px;

  border-radius: 6px;

  margin-bottom: 8px;

  object-fit: cover;
`;

export const Actions = styled.div`
  display: flex;

  gap: 12px;

  font-size: 18px;

  color: #d4d4d4;

  svg {
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      color: white;
      transform: scale(1.2);
    }
  }
`;

export const ActionItem = styled.div`
  display: flex;

  align-items: center;

  gap: 5px;

  span {
    font-size: 14px;
  }
`;

export const BookCardLarge = styled.div`
  width: 200px;
`;

export const CoverLarge = styled.img`
  width: 200px;
  height: 280px;

  border-radius: 6px;

  object-fit: cover;
`;