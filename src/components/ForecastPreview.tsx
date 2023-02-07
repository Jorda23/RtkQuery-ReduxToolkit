import React from "react";
import { WeatherResponse } from "../shared/models/WeatherResponse";
import Icons from "../shared/utils/Icons";
import { LocationGroupButton } from "./LocationGroupButton";
import { useAppSelector } from "../config/store/hooks";
import { useGetWeatherConditionByCityQuery } from "../shared/services/Weather.services";

export const ForecastPreview = () => {
  const { city } = useAppSelector((state) => state.city);
  const { data, isLoading, isError } = useGetWeatherConditionByCityQuery(city);

  const weatherNow = data?.list[0].weather[0];
  const values = data?.list[0].main;
  const forecast = data?.list ? data?.list : [];
  
  return (
    <div className="shadow-2xl w-[24rem] bg-white">
      <h1 className="text-center text-xl text-gray-600 pt-4">
        Rtk Query and Redux Toolkit
      </h1>
      <h1 className="text-center text-xl text-gray-600 pt-4">
        {data?.city?.name}
      </h1>

      <div className="flex items-center justify-center gap-x-4 min-h-15rem">
        <h1 className="text-5xl text-gray-500">
          {values?.temp.toFixed(0)}&deg;
        </h1>
        <img className="w-52 " src={Icons(weatherNow?.main)} alt="icono" />
      </div>

      <div>
        <LocationGroupButton />

        <div className="bg-indigo-700 text-white text-3xl w-full min-h-[7rem] flex items-center justify-center gap-2">
          <h1>{forecast[0]?.main.temp_max.toFixed(0)}&deg; |</h1>

          <h1>{forecast[0]?.main.temp_min.toFixed(0)}&deg;</h1>
        </div>
      </div>
    </div>
  );
};
