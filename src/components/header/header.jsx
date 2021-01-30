import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo name={`header`} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
