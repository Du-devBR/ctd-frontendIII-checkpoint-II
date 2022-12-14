import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { CardDentist } from "./components/Card";
import { CardDentistDetail } from "./components/CardDentistId";
import { ThemeProvider } from "./hooks/UseTheme/useTheme";
import { FavDentist } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { LoginUser } from "./pages/Login";
import { MainLayout } from "./pages/MainLayout";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path:'auth',
      element: <LoginUser />,
    },
    {
      // path: "/", loader:() => redirect('/auth'),
      path: '',
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
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}
