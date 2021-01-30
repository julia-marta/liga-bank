import PropTypes from 'prop-types'

const FormWrapper = (props) => {

  return (
    <div className="form__wrapper">
      {props.children}
    </div>
  );
};

FormWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default FormWrapper;
