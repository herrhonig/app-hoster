import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [banner, setBanner] = useState(false);

  const toggleBanner = () => setBanner((prevBool) => !prevBool);

  return (
    <div className="w-full h-full grid grid-cols-2 gap-16">
      <div className="flex flex-col items-center gap-4 p-6">
        <h1 className="text-2xl font-bold">React Tailwind Counter</h1>

        <div className="text-lg font-semibold">Count: {count}</div>

        <div className="flex gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            -
          </button>
        </div>
        <br />
        <br />
        <div
          role="button"
          className="w-full bg-amber-300 rounded-2xl cursor-pointer"
        >
          <div
            onClick={toggleBanner}
            className="text-center text-amber-800 font-bold text-xl"
          >
            New updates!
          </div>
        </div>
      </div>

      {banner && (
        <div className="w-full h-full">
          <img
            src="/assets/word-update.png"
            alt="banner"
            width={600}
            height={600}
          />
        </div>
      )}
    </div>
  );
}
