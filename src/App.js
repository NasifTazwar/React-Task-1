import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Result from './pages/Result/Result';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="result" element={<Result/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
