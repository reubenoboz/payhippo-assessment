import React, { useState } from "react";
import ProgressBar from "../components/progress-bar";
import Step1 from "../components/steps/step1";
import Step2 from "../components/steps/step2";
import Step3 from "../components/steps/step3";
import Step4 from "../components/steps/step4";
import "./create-account.scss";

const maxValue = 4;

const CreateAccount = () => {
  const [steps, setSteps] = useState<number>(1);
  const [profile, setProfile] = useState({
    firstName: "",
    surname: "",
    businessName: "",
    dob: "",
    email: "",
    phone: "",
    media: "",
    referral: "",
  });

  const [otp, setOtp] = useState('')

  const handleNext = () => {
    if (steps < maxValue) {
      setSteps((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (steps >= 1) {
      setSteps((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="create_account_stepper">
        <div className="stepper_secription">
          {steps !== 4 ? (
            <>
              <h1>Create an account</h1>
              <div>
                The information provided will help us to better know you
              </div>
            </>
          ) : (
            <>
              <h1>Verify Your Phone Number</h1>
              <div>
                Please enter the OTP token sent to your email and{" "}
                {profile.phone}
              </div>
            </>
          )}
        </div>
        <div className="stepper">
          <ProgressBar
            value={steps}
            maxValue={maxValue}
            text={`Step ${steps} of ${maxValue}`}
          />
        </div>
      </div>

      <div className="mt-2">
        {steps === 1 && (
          <Step1
            setProfile={setProfile}
            profile={profile}
            handleNext={handleNext}
          />
        )}
        {steps === 2 && (
          <Step2
            setProfile={setProfile}
            profile={profile}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {steps === 3 && (
          <Step3
            setProfile={setProfile}
            profile={profile}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {steps === 4 && <Step4 otp={otp} setOtp={setOtp} />}
      </div>
    </div>
  );
};

export default CreateAccount;
