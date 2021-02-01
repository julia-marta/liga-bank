import {useCallback} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {getResult, setCurrent, setAmount, setBaseCurrency, setOtherCurrency} from "../../store/slice";
import {CURRENCIES, IconType} from "../../const";

const FormFieldset = (props) => {

  const {type, label,
        current, amount,
        baseCurrency, otherCurrency,
        result,
        getResultAction,
        setCurrentAction, setAmountAction,
        setBaseCurrencyAction, setOtherCurrencyAction}
        = props;

  const handleInputKeyUp = useCallback(
    (evt) => {
      evt.target.value = evt.target.value.replace(/[^\d]/g, '');
    }, []
  );

  const handleInputChange = useCallback(
    (evt) => {
      const currentInput = evt.target.id;

      setAmountAction(evt.target.value)

      if (currentInput !== current) {
        setCurrentAction(currentInput);
        setBaseCurrencyAction(otherCurrency);
        setOtherCurrencyAction(baseCurrency);
        getResultAction(otherCurrency);
      } else {
        getResultAction(baseCurrency);
      }
    }, [
      current,
      baseCurrency,
      otherCurrency,
      getResultAction,
      setCurrentAction,
      setAmountAction,
      setBaseCurrencyAction,
      setOtherCurrencyAction
    ]
  );

  const handleSelectChange = useCallback(
    (evt) => {
      const currentSelect = evt.target.name;

      if (currentSelect === current) {
        setBaseCurrencyAction(evt.target.value);
        getResultAction(evt.target.value);
        } else {
          setOtherCurrencyAction(evt.target.value);
          getResultAction(baseCurrency);
        }

    }, [current, baseCurrency, getResultAction, setBaseCurrencyAction, setOtherCurrencyAction]
  );

  return (
    <fieldset className="form__fieldset">
      <legend className="visually-hidden">Данные для конвертации</legend>
      <label className="form__label" htmlFor={type}>{label}</label>
      <div className="form__inputs">
        <input className="form__input form__input--number"
        type="number" id={type} placeholder="0" value={current === type ? amount : result}
        onKeyUp={handleInputKeyUp} onChange={handleInputChange}
        />
        <div className="form__select">
          <label className="visually-hidden" htmlFor={`select-${type}`}>Выберите валюту</label>
          <select className="form__input form__input--select" id={`select-${type}`}
          name={type} value={current === type ? baseCurrency : otherCurrency}
          onChange={handleSelectChange}
          >
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
  current: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  otherCurrency: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  getResultAction: PropTypes.func.isRequired,
  setCurrentAction: PropTypes.func.isRequired,
  setAmountAction: PropTypes.func.isRequired,
  setBaseCurrencyAction: PropTypes.func.isRequired,
  setOtherCurrencyAction: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  current: store.current,
  amount: store.amount,
  baseCurrency: store.from,
  otherCurrency: store.to,
  result: store.result.toString(),
});

const mapDispatchToProps = (dispatch) => ({
  getResultAction(base) {
    dispatch(getResult(base));
  },
  setCurrentAction(input) {
    dispatch(setCurrent(input));
  },
  setAmountAction(value) {
    dispatch(setAmount(value));
  },
  setBaseCurrencyAction(value) {
    dispatch(setBaseCurrency(value));
  },
  setOtherCurrencyAction(value) {
    dispatch(setOtherCurrency(value));
  },
});

export {FormFieldset};
export default connect(mapStateToProps, mapDispatchToProps)(FormFieldset);

