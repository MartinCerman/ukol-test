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
    !isClosed ?
    <div className="vh-100 d-flex flex-column justify-content-center">
      <Form
        heading="Registration Form"
        buttonText="Create Account"
        linkLabelText="Already have an account?"
        linkText="Sign in"
        crossAction={hideForm}
      />
      <FormToggler
        linkLabelText="Already have an account?"
        linkText="Sign in"        
        toggleAction={toggleForm}
      />
    </div>
    : ""
  );
}

export default App;
