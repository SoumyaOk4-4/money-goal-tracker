export default function SummaryCard({
  total,
  goal,
  setGoal,
  progress,
}) {

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

      <h1 className="text-3xl font-bold">
        Money Goal Tracker
      </h1>

      <div className="mt-6 grid md:grid-cols-3 gap-4">

        <div>
          <p className="text-sm opacity-70">
            Total Saved
          </p>

          <h2 className="text-2xl md:text-4xl font-bold">
            ₹{total}
          </h2>
        </div>

        <div>
          <p className="text-sm opacity-70">
            Goal Amount
          </p>

          <input
            type="number"
            value={goal}
            onChange={(e) =>
              setGoal(
                Number(e.target.value)
              )
            }
            className="mt-2 w-full rounded-xl p-3 text-black"
          />
        </div>

        <div>
          <p className="text-sm opacity-70">
            Progress
          </p>

          <h2 className="text-2xl md:text-4xl font-bold">
            {progress.toFixed(1)}%
          </h2>
        </div>

      </div>
    </div>
  );
}