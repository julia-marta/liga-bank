import PropTypes from "prop-types";

const Button = (props) => {

  const {type, name, label} = props;

    return (
      <button className={`button ${name}`} type={type}>{label}</button>
    )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
