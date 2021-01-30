import Copyright from "../copyright/copyright";
import BottomNavigation from "../bottom-navigation/bottom-navigation";
import Contacts from "../contacts/contacts";
import Social from "../social/social";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Copyright />
        <BottomNavigation />
        <Contacts />
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
