import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./pages/MainLayout";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: 'home',
          element: <Home />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
