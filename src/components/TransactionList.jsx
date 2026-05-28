import { FaTrash } from "react-icons/fa";

export default function TransactionList({
  transactions,
  deleteTransaction,
}) {

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Transactions
      </h2>

      <div className="space-y-4">

        {transactions.map((t) => (

          <div
            key={t.id}
            className="bg-slate-700 rounded-2xl p-4 flex justify-between items-center"
          >

            <div>

              <p className="font-bold text-lg">
                ₹{t.amount}
              </p>

              <p className="opacity-70">
                {t.note}
              </p>

              <span className="text-xs bg-slate-600 px-2 py-1 rounded-full">
                {t.type}
              </span>

            </div>

            <button
              onClick={() =>
                deleteTransaction(t.id)
              }
              className="bg-red-500 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 hover:scale-105"
            >

              <FaTrash />

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}