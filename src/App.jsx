import { useEffect, useState } from "react";

import SummaryCard from "./components/SummaryCard";
import AddTransaction from "./components/AddTransaction";
import ProgressBar from "./components/ProgressBar";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import Backup from "./components/Backup";

export default function App() {

  const [transactions, setTransactions] =
  useState(() => {

    try {

      const saved =
        localStorage.getItem(
          "money-app-data"
        );

      if (!saved) return [];

      const parsed =
        JSON.parse(saved);

      return parsed.transactions || [];

    } catch {

      return [];
    }
  });

  const [goal, setGoal] =
  useState(() => {

    try {

      const saved =
        localStorage.getItem(
          "money-app-data"
        );

      if (!saved) return 100000;

      const parsed =
        JSON.parse(saved);

      return parsed.goal || 100000;

    } catch {

      return 100000;
    }
  });

  // SAVE DATA
  useEffect(() => {

    try {

      localStorage.setItem(
        "money-app-data",

        JSON.stringify({
          transactions,
          goal,
        })
      );

    } catch (err) {

      console.log(err);
    }

  }, [transactions, goal]);

  // TOTAL
  const total = transactions.reduce(
    (sum, t) =>
      sum + Number(t.amount || 0),
    0
  );

  // PROGRESS
  const progress = Math.min(
    (total / goal) * 100,
    100
  );

  // DELETE
  const deleteTransaction = (id) => {

    const filtered =
      transactions.filter(
        (t) => t.id !== id
      );

    setTransactions(filtered);
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">

      <div className="max-w-6xl mx-auto space-y-6">

        <SummaryCard
          total={total}
          goal={goal}
          setGoal={setGoal}
          progress={progress}
        />

        <ProgressBar
          progress={progress}
        />

        <AddTransaction
          transactions={transactions}
          setTransactions={setTransactions}
        />

        <Charts
          transactions={transactions}
        />

        <Backup
          transactions={transactions}
          goal={goal}
          setTransactions={setTransactions}
          setGoal={setGoal}
        />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

        <div className="text-center text-sm opacity-50 py-6">
          © Moshi {new Date().getFullYear()} onwards
        </div>

      </div>
    </div>
  );
}