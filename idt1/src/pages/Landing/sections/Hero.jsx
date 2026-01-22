export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT */}
        <div className="space-y-6 text-center lg:text-left">
          <img
            src="/logo.png"
            alt="Idea Trade"
            className="h-40 mx-auto lg:mx-0"
            onError={(e) =>
              (e.target.src =
                "https://cdn-icons-png.flaticon.com/512/2950/2950582.png")
            }
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Special Features <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              for our customers
            </span>
          </h1>

          <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full text-white font-bold hover:scale-105 transition">
              Try Free Tools
            </button>
            <button className="bg-gray-800 border border-gray-600 px-8 py-3 rounded-full text-white font-bold hover:bg-gray-700 transition">
              Join Membership
            </button>
          </div>
        </div>

        {/* RIGHT : Login Card */}
        <div className="max-w-md mx-auto w-full">
          <div className="bg-[#13141F] border border-gray-800 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-xs text-gray-400 mb-6">
              Sign in to access your dashboard
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#1F2937] px-4 py-3 rounded-lg text-white border border-gray-700 focus:border-purple-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#1F2937] px-4 py-3 rounded-lg text-white border border-gray-700 focus:border-purple-500 outline-none"
              />
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-lg font-bold text-white">
                Sign In →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
