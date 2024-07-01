import { RouteObject } from "react-router-dom"

export function PrivateRoutes () {
  return {
      children: [
        {
          path : "/teste",
          element : <h1>Secret !</h1>
        }
      ]
    }
    
  
}