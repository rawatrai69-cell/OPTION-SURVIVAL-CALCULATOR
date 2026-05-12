export default function OptionsSurvivalCalculator() {
  const [capital, setCapital] = React.useState(10000);
  const [riskPerTrade, setRiskPerTrade] = React.useState(5);
  const [winRate, setWinRate] = React.useState(40);
  const [tradesPerDay, setTradesPerDay] = React.useState(3);
  const [marketBias, setMarketBias] = React.useState("Bullish");

  const riskAmount = (capital * riskPerTrade) / 100;
  const expectedLoss = Math.round(riskAmount * tradesPerDay * (1 - winRate / 100));
  const survivalScore = Math.max(0, Math.min(100, winRate - riskPerTrade * 3));

  let riskLevel = "Low";
  let riskColor = "text-green-600";

  if (riskPerTrade > 10 || winRate < 35) {
    riskLevel = "Dangerous";
    riskColor = "text-red-600";
  } else if (riskPerTrade > 5 || winRate < 50) {
    riskLevel = "Moderate";
    riskColor = "text-yellow-600";
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-center mb-2">
            Options Survival Calculator
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Protect Capital First — Trading Is A Business, Not Gambling
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700 text-sm leading-7">
          <p>
            ⚠ Most retail traders enter options trading believing it is easy money.
            In reality, options trading is one of the toughest businesses in the
            financial world.
          </p>
          <p>
            Professional traders focus more on controlling losses than chasing profits.
          </p>
          <p>
            Your first goal should always be:
            <strong> Survival and capital protection.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold">Trading Capital (₹)</label>
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="w-full mt-2 p-3 rounded-xl border"
            />
          </div>

          <div>
            <label className="font-semibold">Risk Per Trade (%)</label>
            <input
              type="number"
              value={riskPerTrade}
              onChange={(e) => setRiskPerTrade(Number(e.target.value))}
              className="w-full mt-2 p-3 rounded-xl border"
            />
          </div>

          <div>
            <label className="font-semibold">Expected Win Rate (%)</label>
            <input
              type="number"
              value={winRate}
              onChange={(e) => setWinRate(Number(e.target.value))}
              className="w-full mt-2 p-3 rounded-xl border"
            />
          </div>

          <div>
            <label className="font-semibold">Trades Per Day</label>
            <input
              type="number"
              value={tradesPerDay}
              onChange={(e) => setTradesPerDay(Number(e.target.value))}
              className="w-full mt-2 p-3 rounded-xl border"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Choose Market Bias</label>
          <select
            value={marketBias}
            onChange={(e) => setMarketBias(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl border"
          >
            <option>Bullish</option>
            <option>Bearish</option>
          </select>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Risk Analysis</h2>
            <p>
              Risk Amount Per Trade: <strong>₹{riskAmount}</strong>
            </p>
            <p>
              Expected Daily Loss Risk: <strong>₹{expectedLoss}</strong>
            </p>
            <p>
              Market Bias Chosen: <strong>{marketBias}</strong>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Survival Score</h2>
            <p className={`text-2xl font-bold ${riskColor}`}>
              {survivalScore}/100
            </p>
            <p className={`font-semibold ${riskColor}`}>
              Risk Level: {riskLevel}
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 space-y-3 text-gray-700 leading-7">
          <h2 className="text-2xl font-bold text-blue-800">
            Golden Rules Of Survival
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Small losses are normal in trading.</li>
            <li>Never risk large capital in one expiry trade.</li>
            <li>Choose only one direction — Bull or Bear.</li>
            <li>Avoid emotional revenge trading.</li>
            <li>The goal is long-term survival, not excitement.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-yellow-800 text-sm leading-7">
          <p>
            ⚠ If your risk per trade is high and your win rate is low, your account
            may face serious drawdown or complete capital destruction.
          </p>
          <p>
            Successful traders focus on:
            <strong> Minimum Loss + Maximum Controlled Gain.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
