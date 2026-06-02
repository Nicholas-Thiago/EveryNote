import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #1e1e1e;
  color: white;
`;

export const MovieSection = styled.div`
  display: flex;
  gap: 30px;
  padding: 40px;
  background-color: #2f2f2f;
`;

export const Poster = styled.img`
  width: 220px;
  border-radius: 8px;
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const Year = styled.span`
  color: #bbb;
`;

export const Director = styled.p`
  margin-top: 10px;
  color: #ccc;
`;

export const Tagline = styled.p`
  margin-top: 25px;
  font-style: italic;
`;

export const Synopsis = styled.p`
  margin-top: 20px;
  line-height: 1.7;
`;

export const Actions = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background-color: #4a4a4a;
  padding: 12px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ReviewsSection = styled.div`
  padding: 40px;
`;

export const SectionTitle = styled.h2`
  background-color: #666;
  padding: 15px;
  margin-bottom: 20px;
`;

export const ReviewCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #2f2f2f;
  border-radius: 8px;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #666;
`;