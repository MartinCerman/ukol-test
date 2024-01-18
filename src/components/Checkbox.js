const Checkbox = ({ label, isRequired, isValid, name }) => {
    return (
      <div className="form-group form-check my-3 small position-relative">
        <input
          type="checkbox"
          name={name}
          className="form-check-input rounded-0 border-primary border-2 shadow-none focus"
        />
        <label className="form-check-label">
          {label}
        </label>
        <span className="text-danger small position-absolute top-50 start-0 pt-1">
          {isRequired && !isValid ? "You must accept terms & conditions!" : ""}
        </span>
      </div>
    );
  };
  
  export default Checkbox;