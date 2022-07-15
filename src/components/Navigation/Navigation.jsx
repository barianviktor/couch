import React from "react";
import {
  NavigationNav,
  NavigationMainDiv,
  NavigationLogo,
  NavigationLogoLink,
} from "./Navigation.style";
import Logo from "../../Assets/Images/logo.png";
export default function Navigation() {
  return (
    <NavigationNav>
      <NavigationMainDiv>
        <NavigationLogoLink href="/">
          <NavigationLogo src={Logo} />
        </NavigationLogoLink>
      </NavigationMainDiv>
    </NavigationNav>
  );
}
