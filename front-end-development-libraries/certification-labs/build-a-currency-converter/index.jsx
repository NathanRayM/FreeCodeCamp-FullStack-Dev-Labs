const { useState, useMemo } = React;

const exchangeRate = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");

  const baseAmount = useMemo(() => {
    return amount / exchangeRate[fromCurrency];
  }, [amount, fromCurrency]);

  const convertedAmount = baseAmount * exchangeRate[toCurrency];
  const finalAmount = convertedAmount.toFixed(2);

  return (
    <main>
      <h1>Currency Converter</h1>

      <p className="conversion-display"></p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <label>
        Start Currency:
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>JPY</option>
        </select>
      </label>

      <label>
        Target Currency:
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>JPY</option>
        </select>
      </label>
      <p>
        Converted Amount: {finalAmount} {toCurrency}
      </p>
    </main>
  );
}
