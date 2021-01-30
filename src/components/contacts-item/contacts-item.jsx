import PropTypes from "prop-types";
import Icon from "../icon/icon";

const ContactsItem = (props) => {
    const {contact} = props;
    const {type, iconWidth, iconHeight, number, description} = contact;

    return (
      <li className={`contacts__item contacts__item--${type}`}>
        <a className="contacts__link" href={`tel: ${number}`}>
          <Icon name={type} width={iconWidth} height={iconHeight} />
          {number}
        </a>
        <p className="contacts__text">{description}</p>
      </li>
    )
}

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    type:  PropTypes.string.isRequired,
    iconWidth:  PropTypes.number.isRequired,
    iconHeight:  PropTypes.number.isRequired,
    number:  PropTypes.string.isRequired,
    description:  PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
