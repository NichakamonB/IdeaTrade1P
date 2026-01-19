const projects = [
  { name: "MIT", desc: "Market insight tool", premium: false },
  { name: "Stock Mover", desc: "Track market movement", premium: false },
  { name: "Cal DR", desc: "DR calculation", premium: false },
  { name: "หมอดูหุ้น", desc: "AI prediction", premium: true },
];

export default function Project() {
  return (
    <section className="px-4 mb-24 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-white mb-10">
        Explore Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#18181b] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {p.name} {p.premium && "👑"}
            </h3>
            <p className="text-xs text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
