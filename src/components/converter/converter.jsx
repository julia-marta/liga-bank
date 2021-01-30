import Form from "../form/form";
import History from "../history/history";

const Converter = () => {

  return (
    <section className="converter">
      <div className="converter__wrapper container">
        <h2 className="converter__title">Конвертер валют</h2>
        <Form />
        <History />
      </div>
    </section>
  );
};

export default Converter;
