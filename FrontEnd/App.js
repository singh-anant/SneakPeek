import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import HomePage from "./src/pages/HomePage";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <HomePage/>
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)