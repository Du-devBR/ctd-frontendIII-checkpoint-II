import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CardDentist } from "./components/Card";
import { CardDentistDetail } from "./components/CardDentistId";
import { FavDentist } from "./pages/Favorites";
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
        },
        {
          path: 'fav',
          element: <FavDentist />
        },
        {
          path: 'dentist/:id',
          element: <CardDentistDetail />
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
