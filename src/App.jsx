import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Location,
  Menu,
  Contact,
  Error,
  Home,
  SinglePageError,
  Meal,
  Cart,
  Order,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { action as contactAction } from "./pages/Contact";
import { action as orderAction } from "./pages/Order";
import { loader as landingLoader } from "./pages/Menu";
import { loader as singleMealLoader } from "./pages/Meal";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "menu",
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Menu />,
      },
      {
        path: "meals/:id",
        errorElement: <SinglePageError />,
        loader: singleMealLoader(queryClient),
        element: <Meal />,
      },
      {
        path: "location",
        element: <Location />,
        errorElement: <SinglePageError />,
      },
      {
        path: "contact",
        action: contactAction,
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      ,
      {
        path: "order",
        element: <Order />,
        action: orderAction,
      },
    ],
  },
]);
const App = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {isOpen && <Modal />}
    </QueryClientProvider>
  );
};
export default App;
