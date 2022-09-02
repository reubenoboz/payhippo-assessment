import React from "react";
import Button from "../button";
import Input from "../Input";
import './steps.scss'
import {Link} from 'react-router-dom'
import {ProfileT} from '../../types/profileType'

type Step1PropsT = {
    handleNext: () => void;
    setProfile: React.Dispatch<React.SetStateAction<ProfileT>>
    profile: ProfileT
}

const Step1 = ({handleNext, profile, setProfile}: Step1PropsT) => {
  return (
    <div className="steps">
      <Input
        label="First Name"
        type="text"
        name="firstName"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setProfile({...profile, [e.target.name]: e.target.value})
        }
        value={profile.firstName}
        required
      />
      <Input
        label="Surname"
        type="text"
        name="surname"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
        required
        value={profile.surname}
      />
      <Input
        label="Business Name"
        type="text"
        name="businessName"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setProfile({...profile, [e.target.name]: e.target.value})
        }
        required
        value={profile.businessName}
      />
      <div className="action_buttons mt-2">
        <div className="back_action"><Link to="/"><Button type='secondary' text='Back' /></Link></div>
        <div className="next_action"><Button disabled={profile.firstName === '' || profile.surname === "" || profile.businessName === ""} type='primary' text='Next' onClick={handleNext} /></div>
      </div>
    </div>
  );
};

export default Step1;
