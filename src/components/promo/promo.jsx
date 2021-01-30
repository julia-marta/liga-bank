const Promo = () => {

  return (
    <section className="promo">
      <div className="promo__wrapper container">
        <h2 className="visually-hidden">Кредитное предложение</h2>
        <div className="promo__content">
          <p className="promo__title">Лига Банк</p>
          <p className="promo__subtitle">Кредиты на любой случай</p>
          {/* eslint-disable-next-line */}
          <a className="promo__to-credit" href="#">Рассчитать кредит</a>
        </div>
      </div>
    </section>
  );
};

export default Promo;