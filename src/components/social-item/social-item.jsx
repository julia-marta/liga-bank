import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const SocialItem = (props) => {
    const {socialLink} = props;
    const {type, label} = socialLink;

    return (
      <li className="social__item">
        {/* eslint-disable-next-line */}
        <a className={`social__link social__link--${type}`} href="#" aria-label={label}>
          <Icon icon={IconType[`${type.toUpperCase()}`]} />
        </a>
      </li>
    )
}

SocialItem.propTypes = {
  socialLink: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialItem;
