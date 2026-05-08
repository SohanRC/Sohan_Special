import { useState } from "react";
import { useNavigate } from "react-router";

const App = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimate(true);

    // wait for animation to finish
    setTimeout(() => {
      navigate("/birthday");
    }, 600); // match duration
  };

  return (
    <div className="bg-cyan-950 h-screen w-screen relative overflow-hidden">
      {/* Background */}
      <img
        src="public/assets/background.png"
        alt=""
        className="h-full w-full object-cover"
      />

      {/* Centered Gift Box */}
      <div
        className={`absolute inset-0 border-2 flex justify-center items-center`}
      >
        <img
          src="public/assets/Gift_box.png"
          alt=""
          className={`w-sm hover:w-xl md:w-xl md:hover:w-2xl transition-all duration-600
          hover:cursor-pointer ${animate ? "rotate-180 opacity-0" : ""}`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default App;
