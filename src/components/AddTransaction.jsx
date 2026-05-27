import { useState } from "react";

export default function AddTransaction({
  transactions,
  setTransactions,
}) {

  const [amount, setAmount] =
    useState("");

  const [note, setNote] =
    useState("");

  const [type, setType] =
    useState("cash");

  const addTransaction = () => {

    if (!amount) return;

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      note,
      type,
    };

    setTransactions([
      newTransaction,
      ...transactions,
    ]);

    setAmount("");
    setNote("");
    setType("cash");
  };

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="number"
          placeholder="Add Ammount (add minus-sign for spending)"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          className="p-3 rounded-xl text-black"
        />

        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
          className="p-3 rounded-xl text-black"
        />

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          className="p-3 rounded-xl text-black"
        >
          <option value="cash">
            Cash
          </option>

          <option value="online">
            Online
          </option>

          <option value="lent">
            Lent
          </option>

          <option value="others">
            Others
          </option>
        </select>

        <button
          onClick={addTransaction}
          className="bg-blue-600 hover:bg-blue-700 rounded-xl p-3 font-bold transition-all duration-300 hover:scale-105"
        >
          Add
        </button>

      </div>

      <p className="mt-4 text-sm opacity-70">
        Use negative amount to track spending.
      </p>

    </div>
  );
}