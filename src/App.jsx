import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => {
                setColor("#4A235A");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#4A235A" }}
            >
              Dark Purple
            </button>
            <button
              onClick={() => {
                setColor("#1B263B");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#1B263B" }}
            >
              Midnight Blue
            </button>
            <button
              onClick={() => {
                setColor("#1B1B32");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#1B1B32" }}
            >
              Very Dark Violet
            </button>
            <button
              onClick={() => {
                setColor("#2C3E50");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#2C3E50" }}
            >
              Deep Space Blue
            </button>
            <button
              onClick={() => {
                setColor("#004D40");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#004D40" }}
            >
              Dark Teal
            </button>
            <button
              onClick={() => {
                setColor("#2E3B42");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#2E3B42" }}
            >
              Dark Slate
            </button>
            <button
              onClick={() => {
                setColor("#1D1E33");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#1D1E33" }}
            >
              Dark Indigo
            </button>
            <button
              onClick={() => {
                setColor("#2E2E38");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#2E2E38" }}
            >
              Dark Eggplant
            </button>
            <button
              onClick={() => {
                setColor("#3D0C02");
              }}
              className="outline-none px-4 py-1 rounded-md shadow-lg text-white"
              style={{ backgroundColor: "#3D0C02" }}
            >
              Dark Maroon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
