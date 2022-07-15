import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { LoadingComponentDiv } from "./LoadingComponent.style";
export default function LoadingComponent() {
  return (
    <LoadingComponentDiv>
      {<ReactBootstrap.Spinner animation="border" />}
    </LoadingComponentDiv>
  );
}
