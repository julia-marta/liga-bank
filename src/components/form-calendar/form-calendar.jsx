
import {useCallback} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarInput from "../calendar-input/calendar-input";
import Icon from "../icon/icon";
import {setDate, getResult} from "../../store/slice";
import {IconType, MAX_RANGE} from "../../const";

const FormCalendar = (props) => {

  const {currentDate, baseCurrency, setDateAction, getResultAction} = props;

  const subDays = (date, days) => {
   return date.setDate(date.getDate() - days);
  }

  const handleDatePickerChange = useCallback(
    (date) => {
      const dateString = date.toISOString().split('T')[0];
      const currentDateString = currentDate.toISOString().split('T')[0];

      if (dateString !== currentDateString) {
        setDateAction(date);
        getResultAction({base: baseCurrency, date: dateString});
      }
    }, [currentDate, baseCurrency, setDateAction, getResultAction]
  );

  return (
    <div className="form__calendar">
      <label className="visually-hidden" htmlFor="calendar">Выберите дату</label>

      <DatePicker
      dateFormat="d.MM.yyyy"
      selected={currentDate}
      onChange={date => handleDatePickerChange(date)}
      minDate={subDays(new Date(), MAX_RANGE)}
      maxDate={new Date()}
      customInput={<CalendarInput />}
    />

      <Icon icon={IconType.CALENDAR} />
    </div>
  );
};

FormCalendar.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  getResultAction: PropTypes.func.isRequired,
  setDateAction: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  currentDate: store.date,
  baseCurrency: store.from,
});

const mapDispatchToProps = (dispatch) => ({
  getResultAction({base, date}) {
    dispatch(getResult({base, date}));
  },
  setDateAction(date) {
    dispatch(setDate(date));
  },
});

export {FormCalendar};
export default connect(mapStateToProps, mapDispatchToProps)(FormCalendar);
