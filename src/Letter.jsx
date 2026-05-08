export default function Letter() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-pink-50 flex items-center justify-center px-4 py-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,192,203,0.35),_transparent_50%)]"></div>

      {/* Floating Decorations */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">💖</div>
      <div className="absolute bottom-16 right-12 text-5xl animate-pulse">
        🎀
      </div>
      <div className="absolute top-1/3 right-20 text-3xl animate-ping">✨</div>
      <div className="absolute bottom-1/4 left-16 text-4xl animate-pulse">
        🌸
      </div>

      {/* Letter Card */}
      <div
        className="
          relative z-10
          max-w-4xl w-full
          bg-[#fffaf7]
          rounded-[2rem]
          shadow-[0_0_40px_rgba(255,182,193,0.4)]
          border-[10px] border-pink-200
          px-8 md:px-14 py-12
        "
      >
        {/* Top Ribbon */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-8 py-2 rounded-full shadow-lg text-lg font-semibold">
          For My Kutus 💖
        </div>

        {/* Title */}
        <div className="text-center mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
            Happyyy Birthdayyy Shreya 🎂🥳
          </h1>
        </div>

        {/* Center Image */}
        <div className="flex justify-center mt-10 mb-10">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-pink-900 blur-3xl opacity-40 rounded-full group-hover:opacity-60 transition-all duration-500"></div>

            <img
              src="/Central_image.jpg"
              alt=""
              className="
                relative
                w-64 h-64 md:w-80 md:h-80
                object-cover
                rounded-full
                border-[8px] border-pink-200
                shadow-2xl
                transition-all duration-500
                group-hover:scale-105
              "
            />
          </div>
        </div>

        {/* Letter Content */}
        <div
          className="
            text-pink-700
            text-lg md:text-xl
            leading-9
            font-medium
            space-y-6
          "
        >
          <p>
            Happyyyy Birthdayyyy to the prettiest, cutest and most special girl
            everrr 💖
          </p>

          <p>
            I genuinely don’t think words are enough to explain how much you
            mean to me. Every moment with you somehow becomes my favorite
            memory. Your smile, your voice, your care,
            everything about you feels like home 🌷
          </p>

          <p>
            Thank you for making
            ordinary days feel special and for making my life so much happier
            just by existing in it ✨
          </p>

          <p>
            I hope this year brings you endless happiness, success, peace, cute
            surprises, lots of laughter, and every single thing your heart
            wishes for 🎀
          </p>

          <p>
            And selfishly… I hope I get to stay beside you through all those
            beautiful moments too 💕
          </p>

          <p className="text-center text-2xl font-bold text-pink-500 mt-10">
            Really lucky to have you 💖(Bhaggish seidin melay esechilam 😂) 
          </p>
        </div>

        {/* Bottom Signature */}
        <div className="mt-12 text-right">
          <p className="text-pink-500 text-xl italic">— Yours ❤️</p>
        </div>
      </div>
    </div>
  );
}
