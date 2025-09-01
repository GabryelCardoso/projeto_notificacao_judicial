import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
