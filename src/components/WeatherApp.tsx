import React from "react";
import { ForecastPreview } from "./ForecastPreview";

export const WeatherApp = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-800">
      <div className="max-w-lg shadow-2xl grid grid-cols-1 gap-1 relative flex justify-center items-center max-h-full bg-white z-50 rounded-md">
        <ForecastPreview />
      </div>
    </div>
  );
};
