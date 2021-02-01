import {forwardRef} from 'react';

const CalendarInput = ({ value, onClick }, _ref) => (
  <input className="form__input form__input--calendar" type="text" placeholder="" value={value} onClick={onClick} readOnly/>
);

export default forwardRef(CalendarInput);
