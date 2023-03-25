import {BrowserRouter} from "react-router-dom";
import routes from "./routes.js"
import NavBar from "./components/NavBar";

function App() {
  return (
      <BrowserRouter>
          <header>
              <NavBar/>
          </header>
          <main id="page-body">
              {routes}
          </main>
      </BrowserRouter>
  );
}

export default App;
