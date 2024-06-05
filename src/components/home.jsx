import React, { useState } from "react";
import MadMotherComponent from "./madMotherComponent";
import MadFatherComponent from "./madFatherComponent";

function GenericComp() {
  const [maternalView, setMaternalView] = useState(false);
  const [paternalView, setPaternalView] = useState(false);
  const [home, setHome] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-center h-20 bg-gray-500 border-2 border-black">
        <div className="p-6 pt-4">
          <button
            className={`w-32 border-2 border-gray-400 ${
              !home && "hover:bg-slate-200 bg-white"
            } ${home && "bg-green-800 text-white"} ${
              home ? "text-white" : "text-black"
            } font-bold py-2 px-4 rounded`}
            onClick={() => {
              setMaternalView(false);
              setPaternalView(false);
              setHome(true);
            }}
          >
            Home
          </button>
        </div>
        <div className="p-6 pt-4">
          <button
            className={`w-60 border-2 border-gray-400 ${
              !maternalView && "hover:bg-slate-200 bg-white"
            } ${maternalView && "bg-green-800 text-white"} ${
              maternalView ? "text-white" : "text-black"
            } font-bold py-2 px-4 rounded`}
            onClick={() => {
              setMaternalView(true);
              setPaternalView(false);
              setHome(false);
            }}
          >
            View Maternal Tree
          </button>
        </div>
        <div className="p-6 pt-4">
          <button
            className={`w-60 border-2 border-gray-400 ${
              !paternalView && "hover:bg-slate-200 bg-white"
            } ${paternalView && "bg-green-800"} ${
              paternalView ? "text-white" : "text-black"
            } font-bold py-2 px-4 rounded`}
            onClick={() => {
              setPaternalView(true);
              setMaternalView(false);
              setHome(false);
            }}
          >
            View Paternal Tree
          </button>
        </div>
      </div>
      {((!maternalView && !paternalView) || home) && (
        <div className="h-screen bg-gray-200 w-full flex justify-center bg-pattern bg-cover bg-opacity-50">
          <span className="text-5xl font-bold text-zinc-600 p-4 py-10 m-4 tracking-wide">
            Welcome to the Family Hierarchy!
          </span>
        </div>
      )}
      <>
        {maternalView && <MadMotherComponent />}
        {paternalView && <MadFatherComponent />}
      </>
    </>
  );
}

export default GenericComp;
