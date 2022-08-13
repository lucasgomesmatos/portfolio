import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0;
  a {
    color: #fff;
  }

  span {
    font-weight: 300;
  }
`;

export const Mobile = styled.div`
  display: none;
  transition: 0.3s ease-in;
  cursor: pointer;
  z-index: 100px;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 0.875rem;

  a {
    color: #fff;
    padding: 10px;

    &:hover {
      color: #6ef3a5;
    }
  }

  .active {
    color: #6ef3a5;

    &::before {
      content: '<';
      display: inline-block;
      margin-right: 5px;
    }
    &::after {
      content: '>';
      display: inline-block;
      margin-left: 5px;
    }
  }

  @media (max-width: 800px) {
    display: ${(pros) => (pros.active ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 40px;
    margin-top: 60px;
    width: 100%;
    height: calc(100vh + 60px);
    overflow: hidden;
    background: #292a2c;
  }
`;

export const Social = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 5px;
  font-size: 1rem;

  a {
    color: #fff;
    &:hover {
      color: #6ef3a5;
    }
  }
`;
