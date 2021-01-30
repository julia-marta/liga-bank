import PropTypes from "prop-types";
import Icon from "../icon/icon";

const SocialItem = (props) => {
    const {socialLink} = props;
    const {type, label, iconWidth, iconHeight} = socialLink;

    return (
      <li className="social__item">
        {/* eslint-disable-next-line */}
        <a className={`social__link social__link--${type}`} href="#" aria-label={label}>
          <Icon name={type} width={iconWidth} height={iconHeight} />
        </a>
      </li>
    )
}

SocialItem.propTypes = {
  socialLink: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    iconWidth:  PropTypes.number.isRequired,
    iconHeight:  PropTypes.number.isRequired,
  }).isRequired,
};

export default SocialItem;
