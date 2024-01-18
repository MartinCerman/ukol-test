import "./Form.css";
import Input from "./Input";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Form = ({
  heading,
  buttonText,
  crossAction,
  showRegistrationFields = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  const validatePhone = (phoneNumber) => {
    const phonePattern = /^\+?\s?(\d\s?){6,}$/;
    return phonePattern.test(phoneNumber);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let emailValid = true;
    let phoneValid = true;

    if (showRegistrationFields) {
      emailValid = validateEmail(e.target[1].value);
      phoneValid = validatePhone(e.target[3].value);
    } else {
      emailValid = validateEmail(e.target[0].value);
    }

    setIsValidPhone(phoneValid);
    setIsValidEmail(emailValid);

    if (emailValid && phoneValid) {
      showRegistrationFields
        ? alert("Account created")
        : alert("Successfully logged in");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container position-relative pt-4 px-sm-5">
        <div
          className="cross position-absolute top-0 end-0 mt-2 me-3 fs-4"
          onClick={crossAction}
        >
          <LiaTimesSolid />
        </div>
        <form
          action=""
          className="fw-semibold text-black-50"
          onSubmit={onSubmitHandler}
        >
          <h2 className="d-flex align-items-center justify-content-between text-center h3 fw-bold form-heading mb-4">
            <div className="point mt-1"></div>
            {heading}
            <div className="point mt-1"></div>
          </h2>
          {showRegistrationFields && <Input type="text" placeholder="Name" />}
          <Input type="email" placeholder="Email" isValid={isValidEmail} />
          {showRegistrationFields && (
            <Input type="text" placeholder="Country" />
          )}
          {showRegistrationFields && (
            <Input type="tel" placeholder="Phone" isValid={isValidPhone} />
          )}
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
