const Checkbox = ({ label }) => {
    return (
      <div className="form-group form-check my-3">
        <input
          type="checkbox"
          className="form-check-input rounded-0 border-primary border-2 shadow-none focus"
          required
        />
        <label className="form-check-label">
          {label}
        </label>
      </div>
    );
  };
  
  export default Checkbox;