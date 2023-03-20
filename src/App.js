import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/public/HeaderComponent";
import FooterComponent from "./components/public/FooterComponent";
import Home from "./routes/public/Home";
import Store from "./routes/public/Store";
import Services from "./routes/public/Services";
import About from "./routes/public/About";
import RegistrationForm from "./components/public/RegistrationForm";
import SignIn from "./routes/public/SignIn";
import SignUp from "./routes/public/SignUp";
import AdminHome from "./routes/admin/AdminHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/header" Component={HeaderComponent} />
        <Route path="/footer" Component={FooterComponent} />
        <Route path="/home" Component={Home} />
        <Route path="/store" Component={Store} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
        <Route path="/register" Component={RegistrationForm} />
        <Route path="/signIn" Component={SignIn} />
        <Route path="/signUp" Component={SignUp} />
        <Route path="/adminHome" Component={AdminHome} />
      </Routes>
    </div>
  );
}

export default App;
