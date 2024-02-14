import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import HomePage from "./src/pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./src/pages/ErrorPage";
import AboutPage from "./src/pages/AboutPage";
import ContactPage from "./src/pages/ContactPage";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <HomePage/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/about',
    element:<AboutPage/>,
    errorElement:<ErrorPage/>

  },
  {
    path:'contact',
    element:<ContactPage/>,
    errorElement:<ErrorPage/>

  }
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)