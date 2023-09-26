// OnBoardingTutorialPage.tsx

import React, { useState } from 'react';

interface OnBoardingTutorialPageProps {
  onFinishTutorial: () => void;
}

const OnBoardingTutorialPage: React.FC<OnBoardingTutorialPageProps> = ({
  onFinishTutorial,
}) => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onFinishTutorial();
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="onboarding-tutorial-page">
      <h2>Welcome to Our App</h2>
      <div className="tutorial-content">
        {step === 1 && (
          <div className="tutorial-step">
            <h3>Step 1: Get Started</h3>
            <p>Learn how to navigate our app.</p>
          </div>
        )}
        {step === 2 && (
          <div className="tutorial-step">
            <h3>Step 2: Create an Account</h3>
            <p>Register and set up your profile.</p>
          </div>
        )}
        {step === 3 && (
          <div className="tutorial-step">
            <h3>Step 3: Explore Features</h3>
            <p>Discover all the features we offer.</p>
          </div>
        )}
      </div>
      <div className="tutorial-buttons">
        {step > 1 && (
          <button onClick={handlePreviousStep}>Previous</button>
        )}
        {step < 3 ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <button onClick={onFinishTutorial}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default OnBoardingTutorialPage;
