import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import song from "./assets/bday_song.mp3";
import Confetti from "react-confetti";
const Birthday = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 🎵 Smooth Fade Out + Navigate
  const handleNext = () => {
    if (audioRef.current) {
      let volume = audioRef.current.volume;

      const fadeAudio = setInterval(() => {
        if (volume > 0.05) {
          volume -= 0.05;
          audioRef.current.volume = volume;
        } else {
          clearInterval(fadeAudio);

          audioRef.current.pause();

          // redirect after fade
          navigate("/photos");
        }
      }, 120);
    } else {
      navigate("/photos");
    }
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
        gravity={0.15}
      />

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mp3" />
      </audio>

      <div className="absolute top-0 right-0 mt-2 mr-2 z-50">
        <button
          type="button"
          className="text-white border-2 border-pink-700 font-medium leading-5 rounded-base text-xl px-4 py-2.5 cursor-pointer bg-pink-500 rounded-md transition-all hover:scale-105"
          onClick={handleNext}
        >
          Next 🥳
        </button>
      </div>

      {/* Floating Hearts */}
      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-[90%] left-[8%] text-5xl animate-float1">
          💖
        </div>

        <div className="absolute top-[95%] left-[22%] text-3xl animate-float2">
          ✨
        </div>

        <div className="absolute top-[92%] left-[40%] text-4xl animate-float3">
          💕
        </div>

        <div className="absolute top-[97%] left-[58%] text-5xl animate-float4">
          🎀
        </div>

        <div className="absolute top-[94%] left-[75%] text-4xl animate-float5">
          💫
        </div>

        <div className="absolute top-[96%] left-[88%] text-3xl animate-float6">
          🌸
        </div>
      </div>

      {/* Background */}
      <img
        src="/Bday_background.png"
        alt=""
        className="h-full w-full object-cover"
      />

      {/* Center */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative group">
          {/* Cake (unchanged) */}
          <img
            src="/Bday_cake.png"
            alt=""
            // className={`w-sm hover:w-xl md:w-xl md:hover:w-2xl transition-all duration-600
            // hover:cursor-pointer border-2 border-red-600 rounded-full`}
            className="
              w-sm hover:w-xl md:w-xl md:hover:w-2xl
              transition-all duration-500
              hover:scale-105
              hover:cursor-pointer
              border-2 border-red-600
              rounded-full

              animate-float
              drop-shadow-[0_0_35px_rgba(255,182,193,0.7)]"
          />

          {/* Rohee 1 → RIGHT */}
          <img
            src="/rohee3.jpg"
            alt=""
            className="
              w-64 rounded-full absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2

              opacity-0
              transition-all duration-500 ease-in-out

              group-hover:translate-x-48
              group-hover:opacity-100
              border-3 border-red-600
            "
          />

          {/* Rohee 2 → LEFT */}
          <img
            src="/rohee2.jpg"
            alt=""
            className="
              w-64 rounded-full absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2

              opacity-0
              transition-all duration-500 ease-in-out

              group-hover:-translate-x-96
              group-hover:-translate-y-80
              group-hover:opacity-100

              border-3 border-pink-600
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Birthday;
