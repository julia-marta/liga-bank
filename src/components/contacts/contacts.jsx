import ContactsItem from "../contacts-item/contacts-item";
import {CONTACTS} from "../../const";

const Contacts = () => {

  return (
      <ul className="footer__item contacts">
      {CONTACTS.map((item, i) => (
        <ContactsItem key ={i + 1} contact={item} />
      ))}
      </ul>
  );
};

export default Contacts;
