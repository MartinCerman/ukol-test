const FormToggler = ({linkLabelText, linkText, toggleAction}) => {
  return (
    <p className="text-center small mb-0">
      {linkLabelText}&nbsp;
      <a
        href="#"
        className="text-decoration-none text-primary text-nowrap"
        onClick={toggleAction}
      >
        {linkText}
      </a>
    </p>
  );
};

export default FormToggler;