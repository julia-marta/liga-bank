import PropTypes from "prop-types";
import Sprite from '../../img/sprite.svg';

const Icon = (props) => {

  const {icon} = props;

  return(
    <svg className={`icon icon--${icon.name}`} width={icon.width} height={icon.height}>
      <use xlinkHref={`${Sprite}#icon-${icon.name}`} />
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default Icon;
