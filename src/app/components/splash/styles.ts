import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    180deg,
    #000000,
    #111111
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 20px;

  animation: fadeIn 1.5s ease;

  img {
    border-radius: 50%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1`
  color: white;

  font-size: 42px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #aaaaaa;

  font-size: 16px;

  text-align: center;

  max-width: 400px;
`;