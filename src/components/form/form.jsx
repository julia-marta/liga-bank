import {useCallback} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FormWrapper from "../form-wrapper/form-wrapper";
import FormFieldset from "../form-fieldset/form-fieldset";
import FormCalendar from "../form-calendar/form-calendar";
import Button from "../button/button";
import Icon from "../icon/icon";
import {addLog, deleteLog} from "../../store/slice";
import {CONVERTER_FIELDS, MAX_LOGS, IconType} from "../../const";

const ConverterForm = (props) => {

  const {logs, saveHistory, rewriteHistory} = props;

  const handleSaveButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();

      if (logs.length === MAX_LOGS) {
        rewriteHistory();
        saveHistory();
      } else {
        saveHistory();
      }
    }, [logs, saveHistory, rewriteHistory]
  );

  return (
    <form className="converter__form form">
      <FormWrapper>
        {CONVERTER_FIELDS.map((item, i) => (
          <FormFieldset key ={i + 1} type={item.type} label={item.label} />
        ))}
        <Icon icon={IconType.ARROWS} />
      </FormWrapper>
      <FormWrapper>
        <FormCalendar />
        <Button type={`submit`} name={`form__to-save`} label={`Сохранить результат`} onClick={handleSaveButtonClick} />
      </FormWrapper>
    </form>
  );
};

ConverterForm.propTypes = {
  logs: PropTypes.arrayOf(
    PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        base: PropTypes.shape({
          sum: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        }).isRequired,
        result: PropTypes.shape({
          sum: PropTypes.number.isRequired,
          currency: PropTypes.string.isRequired,
        }).isRequired,
    })
  ).isRequired,
  saveHistory: PropTypes.func.isRequired,
  rewriteHistory: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  logs: store.logs,
});

const mapDispatchToProps = (dispatch) => ({
  saveHistory() {
    dispatch(addLog());
  },
  rewriteHistory() {
    dispatch(deleteLog());
  },
});

export {ConverterForm};
export default connect(mapStateToProps, mapDispatchToProps)(ConverterForm);
