import Icon from "../icon/icon";
import {IconType} from "../../const";

const FormCalendar = () => {


  return (
    <div className="form__calendar">
      <label className="visually-hidden" htmlFor="calendar">Выберите дату</label>
      <input className="form__input form__input--calendar" type="text" placeholder="1.12.2020" />
      <Icon icon={IconType.CALENDAR} />
    </div>
  );
};

export default FormCalendar;
