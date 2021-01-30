import Icon from "../icon/icon";
import MenuItem from "../menu-item/menu-item";
import {MENU_ITEMS, ACTIVE_ITEM} from "../../const";

const Navigation = () => {

  return (
    <nav className="header__navigation navigation">
      <ul className="navigation__list navigation__list--main">
      {MENU_ITEMS.map((item, i) => (
        <MenuItem key ={i + 1} type={`navigation`} title={item} isActive={item === ACTIVE_ITEM} />
      ))}
      </ul>
      <ul className="navigation__list navigation__list--user">
        <li className="navigation__item navigation__item--user">
          {/* eslint-disable-next-line */}
          <a className="navigation__link navigation__link--user" href="#">
            <Icon name={`login`} width={20} height={22} />
            Войти в Интернет-банк
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
