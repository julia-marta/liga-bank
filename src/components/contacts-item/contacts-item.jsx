import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const ContactsItem = (props) => {
    const {contact} = props;
    const {type, number, description} = contact;

    return (
      <li className={`contacts__item contacts__item--${type}`}>
        <a className="contacts__link" href={`tel: ${number}`}>
          <Icon icon={IconType[`${type.toUpperCase()}`]} />
          {number}
        </a>
        <p className="contacts__text">{description}</p>
      </li>
    )
}

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    type:  PropTypes.string.isRequired,
    number:  PropTypes.string.isRequired,
    description:  PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
