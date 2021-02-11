import styled, { css } from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 90px;
  background: #05386b;
`;

export const Nav = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  /* background-color: white; */
  height: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  color: white;
`;

export const NavLinks = styled.ul`
  display: flex;
  width: 300px;
  justify-content: space-between;
  color: white;
  list-style: none;
  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #05386b;
    align-items: center;
    justify-content: space-around;
    clip-path: circle(100px at 90% -20%);
    -webkit-clip-path: circle(100px at 90% -20%);
    transition: all 0.5s ease;
    overflow: hidden;

    li:nth-child(1) {
      transform: translateX(800px);
      transition: all 0.5s ease;
      transition-delay: 0.1s;
    }
    li:nth-child(2) {
      transform: translateX(-800px);
      transition: all 0.5s ease;
      transition-delay: 0.2s;
    }
    li:nth-child(3) {
      transform: translateX(800px);
      transition: all 0.5s ease;
      transition-delay: 0.3s;
    }

    ${({ clicked }) =>
      clicked &&
      css`
        visibility: visible;
        clip-path: circle(1050px);
        -webkit-clip-path: circle(1050px);

        li:nth-child(1) {
          transform: translateX(0px);
        }
        li:nth-child(2) {
          transform: translateX(0px);
        }
        li:nth-child(3) {
          transform: translateX(0px);
        }
      `}
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  width: 40px;
  height: 30px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;
  visibility: hidden;

  .line {
    width: 40px;
    height: 5px;
    background-color: white;
    transition: all 0.3s ease;
  }

  .line-active:nth-child(1) {
    transform: translateY(12.5px) rotate(45deg);
  }
  .line-active:nth-child(2) {
    opacity: 0;
  }
  .line-active:nth-child(3) {
    transform: translateY(-12.5px) rotate(-45deg);
  }

  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`;
