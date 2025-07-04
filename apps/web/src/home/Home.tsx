import React from "react";
import home_img from "../asset/home_img.svg";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function Home(): React.JSX.Element {
  return (
    <div
      className="h-screen bg-fixed"
      style={{ backgroundImage: `url(${home_img})` }}
    >
      <div className="flex justify-center items-center relative px-4">
        <span className="py-10 font-mono text-2xl">lotus</span>
        <div className=" absolute right-4 flex gap-2 p-3 pl-7px">
          <Link to="/home" className="font-mono [&.active]:text-teal-500">
            {" "}
            Home
          </Link>
        </div>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
