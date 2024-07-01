import { RouteObject } from "react-router-dom"

export function PublicRoutes () : RouteObject[] {
  return [
    {
      path: "/",
      element: <h1>Oi !</h1>,
      errorElement: ""
    },
    
  ]
}