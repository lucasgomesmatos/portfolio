import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 80px;
  display: grid;
  gap: 20px;
  grid-template-columns: 400px 1fr;
  height: calc(80vh - 60px);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Stack = styled.p`
  background: #6ef3a5;
  color: #222;
  font-weight: 700;
  padding: 5px 10px;
  width: 200px;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1rem;
`;

export const Code = styled.div`
  font-size: 2.5rem;
  font-style: italic;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: #ddd;
`;

export const Chat = styled.div`
  a {
    color: #6ef3a5;
    &::after {
      content: '';
      display: block;
      width: 90px;
      height: 1px;
      background: #6ef3a5;
    }
    &:hover {
      opacity: 0.9;
    }
  }
`;
