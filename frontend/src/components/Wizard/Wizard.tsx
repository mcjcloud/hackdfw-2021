import React from "react";
import "./Wizard.scss";

interface Props {
  stage: "Sign Up" | "Your Profile" | "Matches" | "Join" | "Engage";
}
const Wizard = (props: Props): JSX.Element => {
  return (
    <div className="wizard-container">
      <div className="wizard-hr"></div>
      <div className="wizard-steps-container">
        <span className="step completed">
          <div>1) Sign Up</div>
          <span className="dot"></span>
        </span>
        <span className="step in-progress">
          <div>2) Your Profile</div>
          <span className="dot"></span>
        </span>
        <span className="step">
          <div>3) Matches</div>
          <span className="dot"></span>
        </span>
        <span className="step">
          <div>4) Join</div>
          <span className="dot"></span>
        </span>
        <span className="step">
          <div>5) Engage</div>
          <span className="dot"></span>
        </span>
      </div>
    </div>
  );
};
export default Wizard;
