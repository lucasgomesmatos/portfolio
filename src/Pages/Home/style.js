import styled from 'styled-components';

export const Container = styled.section`
  margin: 80px auto;
  display: grid;
  gap: 20px;
  grid-template-columns: 400px 1fr;
  height: calc(80vh - 60px);
  position: relative;

  @media (max-width: 800px) {
    gap: 40px;
    grid-template-columns: 300px 300px;
  }

  @media (max-width: 680px) {
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: -3;
`;

export const Photo = styled.div`
  z-index: -3;
  justify-self: flex-end;
  img {
    top: 0;
    width: 400px;
  }
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
