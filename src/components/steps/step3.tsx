import React from "react";
import Button from "../button";
import Input from "../Input";
import Select from "../Select";
import "./steps.scss";
import {ProfileT} from '../../types/profileType'

const optionValues = ["Apple App Store", "Email", "Google", "Facebook", "Google", "Google Play Store", "Instagram", "Other", "Referral", "Twitter", "WhatsApp"]

type Step3PropsT = {
    handleNext: () => void;
    handlePrev: () => void;
    setProfile: React.Dispatch<React.SetStateAction<ProfileT>>
    profile: ProfileT
}

const Step3 = ({handlePrev, handleNext, profile, setProfile}: Step3PropsT) => {
  return (
    <div className="steps">
      <Select
        label="Where did you hear about us?"
        value={profile.media}
        placeholder="Select an option"
        name="media"
        options={optionValues}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
      />

      <Input
        label="Referral Code"
        type="text"
        name="referral"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
        value={profile.referral}
      />

      <div className="action_buttons mt-2">
        <div className="back_action">
          <Button type="secondary" text="Back" onClick={handlePrev} />
        </div>
        <div className="next_action">
          <Button disabled={profile.media === ''} type="primary" text="Next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Step3;
