import React from "react";
import { useFPS } from "../hooks/useFPS";
export const Fps = React.memo(() => {
  const fps = useFPS();

  return (
    <div className="absolute w-14 inline-flex top-6 text-xs right-6 bg-black text-white px-1 py-1 rounded z-50">
      <span>fps: </span>
      <span>{fps}</span>
    </div>
  );
});
