import "./Input.css";

const Input = ({ type, placeholder, isValid = true }) => {
    return (
      <div className="form-group mb-2">
        <input
          type={type}
          placeholder={placeholder}
          className={`form-control fw-semibold ps-0 ${
            !isValid ? "invalid-input" : ""
          }`}
        />
        <span className="text-danger small">
          {!isValid ? `${placeholder} not valid!` : ""}
        </span>
      </div>
    );
  };
  
  export default Input;