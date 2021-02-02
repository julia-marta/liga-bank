import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const HistoryItem = (props) => {
    const {log} = props;

    const {date, base, result} = log;

    const dateTime = date.toLocaleDateString();

    return (

      <li className="history__item">
        <time className="history__date" dateTime={dateTime}>{dateTime}</time>
        <p className="history__base">
          {base.sum}
          <span className="history__currency">{base.currency}</span>
        </p>
        <div className="history__icon">
          <Icon icon={IconType.ARROW} />
        </div>
        <p className="history__result">
          {result.sum.toLocaleString('ru-RU', { minimumFractionDigits: 4})}
          <span className="history__currency">{result.currency}</span>
        </p>
      </li>
    )
}

HistoryItem.propTypes = {
  log:  PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    base: PropTypes.shape({
      sum: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
    result: PropTypes.shape({
      sum: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HistoryItem;
