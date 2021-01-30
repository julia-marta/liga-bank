// import PropTypes from "prop-types";

const HistoryItem = (props) => {
    const {date, baseSum, baseCurrency, resultSum, resultCurrency} = props;

    return (

      <li className="history__item">
        <time className="history__date" dateTime={date}>{date}</time>
        <p className="history__base">
          {baseSum}
          <span className="history__currency">{baseCurrency}</span>
        </p>
        <p className="history__result">
          {resultSum}
          <span className="history__currency">{resultCurrency}</span>
        </p>
      </li>
    )
}

// MenuItem.propTypes = {
//   type: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   isActive: PropTypes.bool.isRequired,
// };

export default HistoryItem;
