import HistoryItem from "../history-item/history-item";
import Button from "../button/button";

const mockHistory = [
    {
  date: new Date(2020, 10, 25).toLocaleDateString(),
  base: {
    sum: 1000,
    currency: `RUB`,
  },
  result: {
    sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
    currency: `USD`,
  }
},
{
    date: new Date(2020, 10, 25).toLocaleDateString(),
    base: {
      sum: 1000,
      currency: `RUB`,
    },
    result: {
      sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
      currency: `USD`,
    }
  },
  {
    date: new Date(2020, 10, 25).toLocaleDateString(),
    base: {
      sum: 1000,
      currency: `RUB`,
    },
    result: {
      sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
      currency: `USD`,
    }
  },
  {
    date: new Date(2020, 10, 25).toLocaleDateString(),
    base: {
      sum: 1000,
      currency: `RUB`,
    },
    result: {
      sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
      currency: `USD`,
    }
  },
  {
    date: new Date(2020, 10, 25).toLocaleDateString(),
    base: {
      sum: 1000,
      currency: `RUB`,
    },
    result: {
      sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
      currency: `USD`,
    }
  },
  {
    date: new Date(2020, 10, 25).toLocaleDateString(),
    base: {
      sum: 1000,
      currency: `RUB`,
    },
    result: {
      sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
      currency: `USD`,
    }
  },
  {
    date: new Date(2020, 10, 25).toLocaleDateString(),
    base: {
      sum: 1000,
      currency: `RUB`,
    },
    result: {
      sum: 13.1234.toLocaleString('ru-RU', { minimumFractionDigits: 4}),
      currency: `USD`,
    }
  },

];

const History = () => {

  return (
      <div className="converter__history history">
        <h2 className="history__title">История конвертации</h2>
        <ul className="history__list">
        {mockHistory.length === 0 || !mockHistory ? <span>Здесь пока ничего нет</span> : mockHistory.map((item, i) => (
          <HistoryItem key={i + 1} date={item.date} baseSum={item.base.sum} baseCurrency={item.base.currency}
           resultSum={item.result.sum} resultCurrency={item.result.currency}
           />
        ))}
        </ul>
        <Button type={`button`} name={`history__to-clear`} label={`Очистить историю`} />
      </div>
  );
};

export default History;
