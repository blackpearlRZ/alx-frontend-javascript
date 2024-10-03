import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(val) {
    this._amount = val;
  }

  set currency(val) {
    this._currency = val;
  }

  displayFullPrice() {
    const currency = new Currency(this._currency.code, this._currency.name);
    return `${this._amount} ${currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
