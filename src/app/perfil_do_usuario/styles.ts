import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  background-color: #1e1e1e;

  color: white;
`;

export const TopSection = styled.div`
  background-color: #303030;

  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;

  background-color: #5a5a5a;

  border-radius: 50%;

  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 28px;

  margin-bottom: 20px;
`;

export const InfoRow = styled.div`
  display: flex;

  gap: 30px;

  margin-bottom: 20px;
`;

export const InfoBox = styled.div`
  text-align: center;

  strong {
    color: white;
  }
`;

export const ButtonRow = styled.div`
  display: flex;

  gap: 15px;
`;

export const Button = styled.button`
  background-color: #4a4a4a;

  padding: 10px 20px;

  border: none;
  border-radius: 6px;

  color: white;

  cursor: pointer;

  font-size: 14px;

  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SectionTitle = styled.h2`
  background-color: #666;

  padding: 15px;

  font-size: 22px;
  font-weight: bold;
`;

export const CardRow = styled.div`
  display: flex;

  gap: 30px;

  justify-content: center;

  padding: 25px 0;

  background-color: #2f2f2f;
`;

export const Poster = styled.img`
  width: 140px;

  border-radius: 8px;
`;

export const ReviewRow = styled.div`
  display: flex;

  gap: 40px;

  justify-content: center;

  padding: 35px 0;

  background-color: #2f2f2f;
`;

export const ReviewCard = styled.div`
  width: 180px;

  text-align: center;
`;

export const ReviewName = styled.p`
  margin-top: 12px;

  font-weight: bold;

  font-size: 15px;
`;

export const ReviewText = styled.p`
  font-size: 12px;

  color: #ccc;
`;