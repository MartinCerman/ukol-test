import "./Form.css";
import Input from "./Input";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Form = ({ heading, buttonText, crossAction }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container form-container position-relative py-4 px-sm-5">
        <div
          className="cross position-absolute top-0 end-0 mt-2 me-3 fs-4"
          onClick={crossAction}
        >
          <LiaTimesSolid />
        </div>
        <form action="" className="fw-semibold text-black-50">
          <h2 className="d-flex align-items-center justify-content-between text-center h3 fw-bold form-heading mb-4">
            <div className="point mt-1"></div>
            {heading}
            <div className="point mt-1"></div>
          </h2>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Country" />
          <Input type="tel" placeholder="Phone" />
          <div className="form-group position-relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <AiOutlineEye
                onClick={togglePasswordVisibility}
                className="position-absolute end-0 top-0 h-100 text-primary"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={togglePasswordVisibility}
                className="position-absolute end-0 top-0 h-100 text-primary"
              />
            )}
          </div>
          <Checkbox label="I accept terms & conditions" />
          <SubmitButton buttonText={buttonText} />
        </form>
      </div>
    </div>
  );
};

export default Form;
