import { useState, useRef, useEffect } from "react";
import song from "./assets/soft_music.mp3";

const images = [
  { src: "/shreya/GOLUU.jpeg", caption: "Goluuuu 💕" },
  { src: "/shreya/Golu2.png", caption: "Ummmm 🥰" },
  { src: "/shreya/front.jpeg", caption: "Cuteeee 💘" },
  { src: "/shreya/soyyum.jpeg", caption: "Smiles 😊" },
  { src: "/shreya/sidelook.jpeg", caption: "Swaaaggg 😉" },
  { src: "/shreya/Topor.jpeg", caption: "Ouuukay 👍" },
  { src: "/shreya/metcalfe.jpeg", caption: "Smileee Please 😂" },
  { src: "/shreya/Hideaway.jpeg", caption: "Sweeetttt ✨" },
  { src: "/shreya/Tatooo.jpeg", caption: "Ouuuffff 😎" },
  { src: "/shreya/snap.jpeg", caption: "Swaaag 😏" },
  { src: "/shreya/Us.jpeg", caption: "You & Me 💖" },
  { src: "/shreya/Doodle.jpeg", caption: "Forever & Always ❤️" },
];

const rotations = [
  "rotate-[-3deg]",
  "rotate-[2deg]",
  "rotate-[-2deg]",
  "rotate-[3deg]",
  "rotate-[-4deg]",
];

const Photo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full px-6 py-12 overflow-hidden">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mp3" />
      </audio>

      {/* Floating Hearts */}
      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-[90%] left-[8%] text-6xl animate-float1">
          💖
        </div>

        <div className="absolute top-[95%] left-[22%] text-6xl animate-float2">
          ✨
        </div>

        <div className="absolute top-[92%] left-[40%] text-6xl animate-float3">
          💕
        </div>

        <div className="absolute top-[97%] left-[58%] text-6xl animate-float4">
          🎀
        </div>

        <div className="absolute top-[94%] left-[75%] text-6xl animate-float5">
          💝
        </div>

        <div className="absolute top-[96%] left-[88%] text-6xl animate-float6">
          🌷
        </div>
      </div>

      {/* Background */}
      <img
        src="/photobg.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
          Happyyyyyy Wala Birthdayyyyy Shreyaaaaa 💖
        </h1>

        <p className="text-pink-400 mt-2 text-lg">
          Too much beauty in one page 😤💖
        </p>
      </div>

      {/* Photos Grid */}
      <div className="flex flex-wrap justify-center gap-8 ">
        {images.map((photo, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(photo)}
            className={`
              relative bg-white p-3 pb-6 rounded-lg shadow-xl
              ${rotations[index % rotations.length]}
              transition-all duration-500 ease-in-out
              hover:scale-110 hover:rotate-0 hover:z-20
              hover:shadow-[0_0_25px_rgba(255,182,193,0.8)]
              hover:cursor-pointer
              border-1 border-pink-700
            `}
          >
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-200 opacity-80 rotate-[-6deg] rounded-sm"></div>

            {/* Image Container */}
            <div className="relative w-48 h-56 bg-pink-50 flex items-center justify-center rounded-md overflow-hidden ">
              {/* Image */}
              <img
                src={photo.src}
                alt=""
                className="max-w-full max-h-full object-contain rounded-md"
              />

              {/* Click Button */}
              <button
                onClick={() => setSelectedImage(photo)}
                className="
                  absolute bottom-2 right-2
                  bg-pink-400 hover:bg-pink-500
                  text-white text-xs px-3 py-1 rounded-full
                  shadow-md transition-all duration-300
                  hover:scale-105 hover:cursor-pointer
                  font-bold
                "
              >
                Open 💖
              </button>
            </div>

            {/* Caption */}
            <p className="text-center mt-3 text-pink-500 text-sm font-medium">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 bg-black/70 backdrop-blur-sm
            flex justify-center items-center z-50
            px-4
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal Card */}
          <div
            className="
              relative bg-pink-50 p-5 rounded-3xl
              shadow-[0_0_40px_rgba(255,192,203,0.6)]
              border-4 border-red-500
              max-w-3xl w-full
              animate-[popup_0.4s_ease]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cute Hearts */}
            <div className="absolute -top-5 -left-5 text-4xl">💖</div>

            <div className="absolute -bottom-5 -right-5 text-4xl">💕</div>

            {/* Big Image */}
            <div className="w-full flex justify-center">
              <img
                src={selectedImage.src}
                alt=""
                className="
                  max-h-[75vh]
                  object-contain
                  rounded-2xl
                  border-4 border-pink-200
                "
              />
            </div>

            {/* Caption */}
            <p className="text-center text-pink-500 text-xl mt-5 font-semibold">
              {selectedImage.caption}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-3 right-3
                bg-pink-400 hover:bg-pink-500
                text-white w-10 h-10 rounded-full
                text-lg transition-all duration-300
                cursor-pointer
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
