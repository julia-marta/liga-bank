import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {CURRENCIES, IconType} from "../../const";

const FormFieldset = (props) => {

  const {type, label, base} = props;

  return (
    <fieldset className="form__fieldset">
      <legend className="visually-hidden">Данные для конвертации</legend>
      <label className="form__label" htmlFor={type}>{label}</label>
      <div className="form__inputs">
        <input className="form__input form__input--number" type="number" id={type} placeholder="0" />
        <div className="form__select">
          <label className="visually-hidden" htmlFor={`select-${type}`}>Выберите валюту</label>
          <select className="form__input form__input--select" id={`select-${type}`} defaultValue={base}>
          {CURRENCIES.map(currency => (
            <option key={currency} value={currency} >{currency}</option>
          ))}
          </select>
          <Icon icon={IconType.SELECT} />
        </div>
      </div>
    </fieldset>
  );
};

FormFieldset.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
};

export default FormFieldset;
