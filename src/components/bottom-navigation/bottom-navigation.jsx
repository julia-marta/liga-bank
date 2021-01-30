import MenuItem from "../menu-item/menu-item";
import {MENU_ITEMS, ACTIVE_ITEM} from "../../const";

const BottomNavigation = () => {

  return (
      <ul className="footer__item bottom-navigation">
      {MENU_ITEMS.map((item, i) => (
        <MenuItem key ={i + 1} type={`bottom-navigation`} title={item} isActive={item === ACTIVE_ITEM} />
      ))}
      </ul>
  );
};

export default BottomNavigation;
