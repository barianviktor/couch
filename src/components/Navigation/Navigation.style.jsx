import styled from "styled-components";

export const NavigationNav = styled.nav`
  width: 100vw;
  height: 50px;
  position: absolute;
  background-color: white;

  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavigationMainDiv = styled.div`
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;
export const NavigationLogo = styled.img`
  height: 80%;
  padding: 5px 15px;
`;

export const NavigationLogoLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
