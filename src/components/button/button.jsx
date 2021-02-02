import PropTypes from "prop-types";

const Button = (props) => {

  const {type, name, label, onClick} = props;

    return (
      <button className={`button ${name}`} type={type} onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
