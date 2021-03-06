import React from "react";
import { Link } from "react-router-dom";
import { convertToObject } from "typescript";
import "./Wizard.scss";

export enum WizardStep {
  SIGN_UP = "Sign Up",
  YOUR_PROFILE = "Your Profile",
  MATCHES = "Matches",
  JOIN = "Join",
  ENGAGE = "Engage"
};

interface Props {
  step: WizardStep;
}
const Wizard = (props: Props): JSX.Element => {

  function translateValToKey(step: string): string {
    const values = Object.values(WizardStep);
    const index = values.findIndex(s => s == step);
    return Object.keys(WizardStep)[index];
  }

  function getCSSClass(step: WizardStep) {
    if (props.step == step) {
      return "in-progress";
    }

    const ol = Object.keys(WizardStep);

    const translatedPropStep = translateValToKey(props.step);
    const translatedStep = translateValToKey(step);

    if (ol.splice(ol.indexOf(translatedPropStep)).indexOf(translatedStep) == -1) {
      return "completed";
    }
  }

  return (
    <div className="wizard-container">
      <div className="wizard-hr"></div>
      <div className="wizard-steps-container">
        <span className={`step ${getCSSClass(WizardStep.SIGN_UP)}`}>
          <div><strong>1)</strong> Sign Up</div>
          <Link to="/signup"><span className="dot"></span></Link>
        </span>
        <span className={`step ${getCSSClass(WizardStep.YOUR_PROFILE)}`}>
          <div><strong>2)</strong> Your Profile</div>
          <Link to="/profile"><span className="dot"></span></Link>
        </span>
        <span className={`step ${getCSSClass(WizardStep.MATCHES)}`}>
          <div><strong>3)</strong> Matches</div>
          <Link to="/matches"><span className="dot"></span></Link>
        </span>
        <span className={`step ${getCSSClass(WizardStep.JOIN)}`}>
          <div><strong>4)</strong> Join</div>
          <Link to="/join"><span className="dot"></span></Link>
        </span>
        <span className={`step ${getCSSClass(WizardStep.ENGAGE)}`}>
          <div><strong>5)</strong> Engage</div>
          <Link to="/engage"><span className="dot"></span></Link>
        </span>
      </div>
    </div>
  );
};
export default Wizard;
