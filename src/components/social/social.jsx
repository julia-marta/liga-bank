import SocialItem from "../social-item/social-item";
import {SOCIAL_LINKS} from "../../const";

const Social = () => {

  return (
      <ul className="footer__item social">
      {SOCIAL_LINKS.map((item, i) => (
        <SocialItem key ={i + 1} socialLink={item}  />
      ))}
      </ul>
  );
};

export default Social;
