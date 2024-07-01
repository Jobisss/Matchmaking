import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export function MyAppRoutes(){
  const router =  createBrowserRouter([
    PrivateRoutes(), ...PublicRoutes()
  ])

  return <RouterProvider router={router}/>
}