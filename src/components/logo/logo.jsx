import PropTypes from "prop-types";
import logo from '../../img/logo.svg';

const Logo = (props) => {

  const {name} = props;

  return (
    <div className={`${name}__logo`}>
    {/* eslint-disable-next-line */}
    <a>
      <img src={logo} width="150" height="27" alt="Логотип Лига Банка"/>
    </a>
    </div>
  );
};
Logo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Logo;
