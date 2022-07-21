import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Router from "./router/Router";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
