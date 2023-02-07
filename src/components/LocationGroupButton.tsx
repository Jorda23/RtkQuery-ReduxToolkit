import React from "react";
import { useAppDispatch } from "../config/store/hooks";
import { setCity } from "../store/citySlice";

export const LocationGroupButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex py-2 items-center bg-indigo-700 justify-around text-white text-sm">
      <button onClick={() => dispatch(setCity("Managua"))}>Managua</button>

      <button
        className="border-x-2 px-6"
        onClick={() => dispatch(setCity("Miami"))}
      >
        Miami
      </button>

      <button onClick={() => dispatch(setCity("London"))}>London</button>
    </div>
  );
};
