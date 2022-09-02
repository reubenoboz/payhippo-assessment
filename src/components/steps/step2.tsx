import React from "react";
import Button from "../button";
import Input from "../Input";
import "./steps.scss";
import {ProfileT} from '../../types/profileType'

type Step2PropsT = {
    handleNext: () => void;
    handlePrev: () => void;
    profile: ProfileT;
    setProfile: React.Dispatch<React.SetStateAction<ProfileT>>
}

const Step2 = ({handlePrev, handleNext, setProfile, profile}: Step2PropsT) => {
  return (
    <div className="steps">
      <Input
        label="Date of Birth"
        type="date"
        name="dob"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
        required
        value={profile.dob}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
        required
        value={profile.email}
      />
      <Input
        label="Phone Number"
        type="text"
        name="phone"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
        required
        value={profile.phone}
      />
      <div className="action_buttons mt-2">
        <div className="back_action">
          <Button type="secondary" text="Back" onClick={handlePrev}/>
        </div>
        <div className="next_action">
          <Button disabled={profile.dob === '' || profile.email === '' || profile.phone === ''} type="primary" text="Next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Step2;
