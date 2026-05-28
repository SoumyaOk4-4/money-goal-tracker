import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function Charts({
  transactions,
}) {

  const totals = {
    cash: 0,
    online: 0,
    lent: 0,
    others: 0,
  };

  transactions.forEach((t) => {

    if (
      t.type &&
      totals[t.type] !== undefined
    ) {

      totals[t.type] += Number(
        t.amount || 0
      );
    }
  });

  const data = [
    {
      name: "Cash",
      value: totals.cash,
    },
    {
      name: "Online",
      value: totals.online,
    },
    {
      name: "Lent",
      value: totals.lent,
    },
    {
      name: "Others",
      value: totals.others,
    },
  ];

  const colors = [
    "#22c55e",
    "#3b82f6",
    "#eab308",
    "#ef4444",
  ];

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 min-h-[350px]">

      <h2 className="text-2xl font-bold mb-4">
        Money Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}