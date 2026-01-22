export default function Pricing() {
  return (
    <section className="px-4 mb-24 text-center">
      <h2 className="text-2xl font-bold text-white mb-10">
        Pricing Plans
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="bg-[#161722] p-8 rounded-2xl border border-gray-800">
          <h3 className="text-white font-bold mb-2">Free</h3>
          <p className="text-gray-400 text-sm mb-4">฿0 / month</p>
          <button className="bg-gray-700 px-6 py-2 rounded-lg text-white">
            Try Free
          </button>
        </div>

        <div className="bg-[#2E1065] p-8 rounded-2xl border border-purple-500">
          <h3 className="text-white font-bold mb-2">Premium</h3>
          <p className="text-purple-200 text-sm mb-4">฿2500 / month</p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-lg text-white">
            Get Pro
          </button>
        </div>
      </div>
    </section>
  );
}
