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
import Authlayout from "./auth/authlayout/authlayout";
import LoginForm from "./auth/Login/Login";

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
  path: "/chat",
  component: Room,
});
const authroute = createRoute({
  getParentRoute: () => rootRoute,  
   path: "/auth",
   component: Authlayout
});
const LoginRoute = createRoute({
  getParentRoute: () => authroute,
  path: "/",
  component:LoginForm
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
  authroute.addChildren([LoginRoute]),
]);

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
