import "./App.css";
import Form from "./components/Form";
import FormToggler from "./components/FormToggler";
import { useState } from "react";

function App() {
    const [hasLogin, setHasLogin] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const toggleForm = () => {
      setHasLogin(!hasLogin);
    }

    const hideForm = () => {
      setIsClosed(!isClosed);
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {!isClosed ? (hasLogin ?
      <div className="form-container w-100 bg-white pb-4">
        <Form
          heading="Login Form"
          buttonText="Login"
          crossAction={hideForm}
        />
        <FormToggler
          linkLabelText="Don't have an account?"
          linkText="Sign up"
          toggleAction={toggleForm}
        />
      </div>
      :
      <div className="form-container w-100 bg-white pb-4">
        <Form
          heading="Registration Form"
          buttonText="Create Account"
          showRegistrationFields={true}
          crossAction={hideForm}
        />
        <FormToggler
          linkLabelText="Already have an account?"
          linkText="Sign in"
          toggleAction={toggleForm}
        />
      </div>) : ""}
    </div>
  );
}

export default App;
