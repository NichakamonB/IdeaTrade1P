export default function WhatsNew() {
  const updates = [
    {
      title: "Project name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Project name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Project name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Project name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Project name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Project name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="space-y-10">

      {/* ================= TOP HIGHLIGHT ================= */}
      <div
        className="w-full h-56 rounded-2xl
                   bg-gradient-to-r from-slate-700 to-slate-600
                   border border-sky-500/20"
      />

      {/* ================= UPDATE CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates.map((item, i) => (
          <div
            key={i}
            className="
              bg-slate-800
              border border-sky-500/30
              rounded-2xl p-6
              hover:border-sky-400
              transition
            "
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  w-10 h-10 rounded-xl
                  bg-sky-600/20
                  text-sky-400
                  flex items-center justify-center
                "
              >
                ⦿
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              {item.desc}
            </p>

            {/* Button */}
            <button
              className="
                w-full py-2.5 rounded-lg
                bg-sky-600 hover:bg-sky-500
                transition
                flex items-center justify-center gap-2
              "
            >
              <span>Open tool</span>
              <span className="text-sm">↗</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
