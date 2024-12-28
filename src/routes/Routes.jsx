import { createBrowserRouter } from "react-router-dom";
import Home from "../frontend/Home/Home"

export const routes = createBrowserRouter([
// ======= MAIN ROUTES ======= */}

{
    path: "/",
    element: <Home />,
},
{
    path: "/home",
    element: <Home />,
},


// {
//   path: "/",
//   element: <MainLayout />,
// //   errorElement: <DisplayError />,
//   children: [
//     // --- home ---
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//     },

//   ],
// },


]);