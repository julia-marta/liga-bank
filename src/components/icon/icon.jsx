import PropTypes from "prop-types";
import Sprite from '../../img/sprite.svg';

const Icon = (props) => {

  const {name, width, height} = props;

  return(
    <svg className={`icon icon--${name}`} width={width} height={height}>
      <use xlinkHref={`${Sprite}#icon-${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Icon;
