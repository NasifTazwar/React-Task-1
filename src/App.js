import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Result from './pages/Result/Result';
import Admin from "./pages/Admin/Admin";
import QuizEncode from "./pages/Admin/QuizEncode/QuizEncode";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="result" element={<Result/>}></Route>
            <Route path="admin" element={<Admin/>}></Route>
            <Route path="/quiz" element={<QuizEncode/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
