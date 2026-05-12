export default function OptionsRiskSurvivalCalculator() {
  const [capital, setCapital] = React.useState(100000);
  const [riskPercent, setRiskPercent] = React.useState(2);
  const [stopLoss, setStopLoss] = React.useState(20);
  const [drawdown, setDrawdown] = React.useState(50);
  const [lossTrades, setLossTrades] = React.useState(10);
  const [monthlyProfit, setMonthlyProfit] = React.useState(25000);
  const [badDayLoss, setBadDayLoss] = React.useState(320000);

  const riskAmount = (capital * riskPercent) / 100;
  const positionSize = stopLoss > 0 ? Math.floor(riskAmount / stopLoss) : 0;
  const recoveryNeeded = drawdown < 100
    ? ((drawdown / (100 - drawdown)) * 100).toFixed(2)
    : "Infinite";
  const remainingCapital = (capital * Math.pow(1 - riskPercent / 100, lossTrades)).toFixed(0);
  const yearlyProfit = monthlyProfit * 11;
  const finalYearResult = yearlyProfit - badDayLoss;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-red-500">
            Most Traders Are Not Defeated By The Market.
            <br />
            They Are Defeated By Position Sizing.
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            This tool is built to show how one careless options trade,
            emotional averaging, or revenge trading can destroy years of profits.
            Risk management is survival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Risk Per Trade Calculator
            </h2>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Trading Capital (₹)</label>
              <input
                type="number"
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-black border border-zinc-700"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Risk % Per Trade</label>
              <input
                type="number"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-black border border-zinc-700"
              />
            </div>

            <div className="bg-black p-4 rounded-2xl border border-red-700">
              <p className="text-gray-400">Maximum Allowed Loss</p>
              <p className="text-3xl font-bold text-red-500">₹ {riskAmount.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-blue-400">
              Position Size Calculator
            </h2>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Stop Loss Per Lot (₹)</label>
              <input
                type="number"
                value={stopLoss}
                onChange={(e) => setStopLoss(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-black border border-zinc-700"
              />
            </div>

            <div className="bg-black p-4 rounded-2xl border border-blue-700">
              <p className="text-gray-400">Safe Position Size</p>
              <p className="text-3xl font-bold text-blue-400">{positionSize} Units</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-green-400">
              Drawdown Recovery Calculator
            </h2>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Drawdown %</label>
              <input
                type="number"
                value={drawdown}
                onChange={(e) => setDrawdown(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-black border border-zinc-700"
              />
            </div>

            <div className="bg-black p-4 rounded-2xl border border-green-700">
              <p className="text-gray-400">Recovery Needed</p>
              <p className="text-3xl font-bold text-green-400">{recoveryNeeded}%</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              Probability of Ruin
            </h2>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Consecutive Losing Trades</label>
              <input
                type="number"
                value={lossTrades}
                onChange={(e) => setLossTrades(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-black border border-zinc-700"
              />
            </div>

            <div className="bg-black p-4 rounded-2xl border border-purple-700">
              <p className="text-gray-400">Remaining Capital</p>
              <p className="text-3xl font-bold text-purple-400">₹ {Number(remainingCapital).toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl space-y-4 md:col-span-2">
            <h2 className="text-2xl font-semibold text-red-400">
              One Bad Day Reality Check
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm text-gray-400">Average Monthly Profit (₹)</label>
                <input
                  type="number"
                  value={monthlyProfit}
                  onChange={(e) => setMonthlyProfit(Number(e.target.value))}
                  className="w-full p-3 rounded-xl bg-black border border-zinc-700"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-400">One Emotional Loss Day (₹)</label>
                <input
                  type="number"
                  value={badDayLoss}
                  onChange={(e) => setBadDayLoss(Number(e.target.value))}
                  className="w-full p-3 rounded-xl bg-black border border-zinc-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-black p-4 rounded-2xl border border-zinc-700">
                <p className="text-gray-400">11 Months Profit</p>
                <p className="text-3xl font-bold text-green-400">₹ {yearlyProfit.toLocaleString()}</p>
              </div>

              <div className="bg-black p-4 rounded-2xl border border-red-700">
                <p className="text-gray-400">Final Year Result</p>
                <p className={`text-3xl font-bold ${finalYearResult >= 0 ? 'text-green-400' : 'text-red-500'}`}>
                  ₹ {finalYearResult.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 pt-8 border-t border-zinc-800">
          <p>
            "Options trading does not destroy traders quickly.
            Lack of risk control does."
          </p>
        </div>
      </div>
    </div>
  );
}
