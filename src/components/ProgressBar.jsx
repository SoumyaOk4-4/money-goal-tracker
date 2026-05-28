export default function ProgressBar({
  progress,
}) {

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4">

      <div className="w-full h-8 bg-slate-700 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}