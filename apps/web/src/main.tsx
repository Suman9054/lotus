import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./home/Home";
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { Home_c } from "./components/Home_c/Home_c";
import { Room } from "./room/Room";
import AiVideoLanding from "./Landing/Landin_page";

const rootRoute = createRootRoute({});

const LandimgRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: AiVideoLanding,
});

const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: Home,
});

const indexRoute = createRoute({
  getParentRoute: () => HomeRoute,
  path: "/",
  component: Home_c,
});

const RoomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/room/$",
  component: Room,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const routeTree = rootRoute.addChildren([
  LandimgRoute,
  HomeRoute.addChildren([indexRoute]),
  RoomRoute,
]);

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
