import React from "react";
import styled from "react-emotion";

const TitleText = styled("h1")`
  font-family: "Permanent Marker";
  font-size: 30px;
  text-align: center;
`;

const TT1 = styled(TitleText)`
  line-height: 1em;
  color: gray;
  font-size: 70px;
  color: #ffeeaa;
  margin-top: 20px;
`;

const TT2 = styled(TitleText)`
  margin-top: -120px;
  margin-bottom: 50px;
  color: #ff8b00;
`;

const TT3 = styled(TT1)`
  margin-top: -4rem;
`;

export default function Title() {
  return (
    <div>
      <TT1>Budget</TT1>
      <TT3>Wants</TT3>
      <TT2>50 | 30 | 20</TT2>
    </div>
  );
}
