import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <BrowserRouter>
          <Navbar />
          <Toaster position="top-right" />
          <AppRoutes />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
