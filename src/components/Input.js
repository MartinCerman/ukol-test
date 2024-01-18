import "./Input.css";

const Input = ({ type, placeholder, isValid = true }) => {
    return (
      <div className="form-group mb-2 position-relative">
        <input
          type={type}
          name={placeholder}
          placeholder={placeholder}
          className={`form-control ps-0 ${
            !isValid ? "invalid-input" : ""
          }`}
        />
        <span className="text-danger small position-absolute top-0 end-0">
          {!isValid ? `${placeholder} is not valid!` : ""}
        </span>
      </div>
    );
  };
  
  export default Input;