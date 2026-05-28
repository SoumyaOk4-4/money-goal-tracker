export default function Backup({
  transactions,
  goal,
  setTransactions,
  setGoal,
}) {

  const exportData = () => {

    const data = {
      transactions,
      goal,
    };

    const blob = new Blob(
      [JSON.stringify(data)],
      {
        type: "application/json",
      }
    );

    const a = document.createElement("a");

    a.href =
      URL.createObjectURL(blob);

    a.download =
      "money-tracker-backup.json";

    a.click();
  };

  const importData = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {

      const data = JSON.parse(
        event.target.result
      );

      setTransactions(
        data.transactions || []
      );

      setGoal(
        data.goal || 100000
      );
    };

    reader.readAsText(file);
  };

  const resetAll = () => {

    const confirmReset =
      window.confirm(
        "Reset all app data?"
      );

    if (!confirmReset) return;

    localStorage.removeItem(
      "money-app-data"
    );

    setTransactions([]);
    setGoal(100000);
  };

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-4">

      <button
        onClick={exportData}
        className="bg-green-600 hover:bg-green-700 rounded-2xl p-4 font-bold transition-all duration-300 hover:scale-105"
      >
        Export Backup
      </button>

      <label className="bg-blue-600 hover:bg-blue-700 rounded-2xl p-4 font-bold text-center cursor-pointer transition-all duration-300 hover:scale-105">

        Import Backup

        <input
          type="file"
          hidden
          accept=".json"
          onChange={importData}
        />

      </label>

      <button
        onClick={resetAll}
        className="bg-red-600 hover:bg-red-700 rounded-2xl p-4 font-bold transition-all duration-300 hover:scale-105"
      >
        Reset App
      </button>

    </div>
  );
}