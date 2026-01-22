export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
  "Shortcuts",
  "หมอดูหุ้น",
  "Petroleum",
  "Rubber Thai",
  "Flow Intraday",
  "S50",
  "Gold",
  "BidAsk",
  "DR",
];

  return (
    <div className="mb-10">
      <div className="flex gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                isActive
                    ? "bg-yellow-400/20 text-yellow-300"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
            >
            {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
