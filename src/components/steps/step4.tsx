import React from "react";
import Button from "../button";
import Input from "../Input";

type Step4T = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
};

const Step4 = ({ otp, setOtp }: Step4T) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter OTP code"
        label="OTP Token"
        name="otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setOtp(e.target.value)
        }
        errorText=""
        required
        value={otp}
      />
      <div className="action_buttons mt-2">
        <div className="next_action">
          <Button disabled={otp === ''} type="primary" text="Continue" />
        </div>
      </div>
    </div>
  );
};

export default Step4;
