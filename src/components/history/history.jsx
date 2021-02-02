import {useCallback} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import HistoryItem from "../history-item/history-item";
import Button from "../button/button";
import {clearLogs} from "../../store/slice";

const History = (props) => {

  const {logs, clearHistory} = props;

  const handleClearButtonClick = useCallback(
    () => {

      if (logs.length > 0) {
        clearHistory();
      }
    }, [logs, clearHistory]
  );

  return (
      <div className="converter__history history">
        <h2 className="history__title">История конвертации</h2>
        <ul className="history__list">
        {logs.length === 0 ? <span>Здесь пока ничего нет</span> : logs.map((item, i) => (
          <HistoryItem key={i + 1} log={item}/>
        ))}
        </ul>
        <Button type={`button`} name={`history__to-clear`} label={`Очистить историю`} onClick={handleClearButtonClick} />
      </div>
  );
};

History.propTypes = {
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
  clearHistory: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  logs: store.logs,
});

const mapDispatchToProps = (dispatch) => ({
  clearHistory() {
    dispatch(clearLogs());
  },
});

export {History};
export default connect(mapStateToProps, mapDispatchToProps)(History);
