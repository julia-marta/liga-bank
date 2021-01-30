import PropTypes from "prop-types";

const MenuItem = (props) => {
    const {type, title, isActive} = props;

    return (
      (type === 'bottom-navigation' && isActive) ? `` :
      <li className={`${type}__item`}>
        {/* eslint-disable-next-line */}
        <a className={`${type}__link ${isActive ? `navigation__link--active` : ``}`} href="#">{title}</a>
      </li>
    )
}

MenuItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default MenuItem;
