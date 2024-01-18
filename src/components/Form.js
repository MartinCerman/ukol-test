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
  const [isValidName, setIsValidName] = useState(true);
  const [isValidCountry, setIsValidCountry] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidCheckbox, setIsValidCheckbox] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Tests an email against a regular expression and returns true if it's valid,
  // false otherwise.
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  // Tests a phone number against a regular expression and returns true if it's valid,
  // false otherwise.
  const validatePhone = (phoneNumber) => {
    const phonePattern = /^\+?\s?(\d\s?){6,}$/;
    return phonePattern.test(phoneNumber);
  };

  // Notifies user if all fields are valid.
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (validateFields(e.target.elements)) {
      showRegistrationFields
        ? alert("Account created")
        : alert("Successfully logged in");
    }
  };

  // Runs validation functions for input fields and returns true if all are valid,
  // false otherwise.
  const validateFields = (elements) => {
    let emailValid = true;
    let phoneValid = true;
    let countryValid = true;
    let nameValid = true;
    let passwordValid = true;
    let checkboxValid = true;

    console.log(elements);
    if (showRegistrationFields) {
      phoneValid = validatePhone(elements["Phone"].value);
      nameValid = elements["Name"].value != "";
      countryValid = elements["Country"].value != "";
    }

    emailValid = validateEmail(elements["Email"].value);
    passwordValid = elements["Password"].value != "";
    checkboxValid = elements["terms"].checked == true;

    setIsValidPhone(phoneValid);
    setIsValidEmail(emailValid);
    setIsValidName(nameValid);
    setIsValidCountry(countryValid);
    setIsValidPassword(passwordValid);
    setIsValidCheckbox(checkboxValid);

    return emailValid && phoneValid && nameValid && countryValid && passwordValid && checkboxValid;
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
        <form noValidate className="fw-semibold text-black-50" onSubmit={onSubmitHandler}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="point"></div>
            <h2 className="d-flex align-items-center justify-content-between text-center h4 fw-bold form-heading">
              {heading}
            </h2>
            <div className="point"></div>
          </div>
          {showRegistrationFields && (
            <Input type="text" placeholder="Name" isValid={isValidName} />
          )}
          <Input type="email" placeholder="Email" isValid={isValidEmail} />
          {showRegistrationFields && (
            <Input type="text" placeholder="Country" isValid={isValidCountry} />
          )}
          {showRegistrationFields && (
            <Input type="tel" placeholder="Phone" isValid={isValidPhone} />
          )}
          <div className="form-group position-relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              isValid={isValidPassword}
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
          <Checkbox label="I accept terms & conditions" isRequired={true} isValid={isValidCheckbox} name={"terms"} />
          <SubmitButton buttonText={buttonText} />
        </form>
      </div>
    </div>
  );
};

export default Form;
