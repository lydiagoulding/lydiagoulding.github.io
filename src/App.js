import Sidebar from './Sidebar';
import './App.css';
import ComponentsPage from "./ComponentsPage";
import HooksPage from "./HooksPage";
import ContextPage from "./ContextPage";
import UtilitiesPage from "./UtiliitesPage";
import Footer from "./Footer";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import ExamplePage from "./ExamplePage";
import InstallPage from "./InstallPage";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="AppGrid">
                  <Sidebar></Sidebar>
                  <div className="content">
                    <Routes>
                        <Route path="/react-nmi-collectjs">
                            <Route path="install" element={<InstallPage/>} />
                            <Route path="examples" element={<ExamplePage/>} />
                            <Route path="components" element={<ComponentsPage/>} />
                            <Route path="hooks" element={<HooksPage/>} />
                            <Route path="contexts" element={<ContextPage/>} />
                            <Route path="utilities" element={<UtilitiesPage/>} />
                        </Route>
                    </Routes>
                  </div>
                <Footer/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
