import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
