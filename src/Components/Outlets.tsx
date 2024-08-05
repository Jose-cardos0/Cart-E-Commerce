import { Outlet } from "react-router-dom";
import { Headers } from "./Headers";

export function Outlets() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}
