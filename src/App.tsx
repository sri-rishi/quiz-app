import React from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AllRoutes />
    </div>
  );
}

export default App;
