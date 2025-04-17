import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoadingStore } from "./stores/loadingStore";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import MyBooks from "./pages/MyBooks";
import Login from "./pages/Login";
import Banner from "./components/Banner";
import PopularBooks from "./components/PopularBooks";

function App() {
  const { isLoading } = useLoadingStore();

  return (
    <div>
      <div>
        {isLoading && (
          <div className="loader-overlay">
            <ClipLoader
              color="#f88c6b"
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        <NavBar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Banner />
        <PopularBooks />
      </div>
    </div>
  );
}

export default App;
