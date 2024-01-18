import "./SubmitButton.css";

const SubmitButton = ({ buttonText }) => {
    return (
      <div className="w-100 text-center my-3">
        <button
          type="submit"
          className="btn btn-primary rounded-5 px-5 py-2 lh-lg fw-semibold"
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  export default SubmitButton;